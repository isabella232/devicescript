import { ensureDir } from "fs-extra"
import { spawn } from "node:child_process"
import { writeFileSync } from "node:fs"
import { BINDIR, CmdOptions, log } from "./command"
import { readCompiled } from "./run"

export interface CRunOptions {
    net?: boolean
    serial?: string
}

export async function crunScript(
    fn: string,
    options: CRunOptions & CmdOptions
) {
    const prog = await readCompiled(fn)
    const compfn = BINDIR + "/compiled.devs"
    await ensureDir(BINDIR)
    writeFileSync(compfn, prog)

    const args = [compfn]

    if (!options.net) args.unshift("-X", "-n")

    if (options.serial) args.unshift(options.serial)
    else if (options.net) args.unshift("8082")

    const executable = "./runtime/built/jdcli"
    log(`run: ${executable} ${args.join(" ")}`)
    const child = spawn(executable, args, {
        stdio: "inherit",
    })
    child.on("exit", (code, err) => {
        if (!code && err) code = 2
        process.exit(code)
    })
}

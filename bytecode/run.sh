#!/bin/sh

set -x
set -e
node ../compiler/node_modules/typescript/bin/tsc
node build/process.js bytecode.md
cp build/bytecode.ts ../compiler/src/
cp build/jacs_bytecode.h ../jacdac-c/jacscript/
clang-format -i ../jacdac-c/jacscript/jacs_bytecode.h
prettier -w ../compiler/src/bytecode.ts
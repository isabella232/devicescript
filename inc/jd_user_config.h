#ifndef JD_USER_CONFIG_H
#define JD_USER_CONFIG_H

#define JD_CONFIG_TEMPERATURE 0

#include <stdio.h>

#define DMESG(fmt, ...) printf(fmt "\n", ##__VA_ARGS__)

#define JD_LOG DMESG

#define JD_CONFIG_STATUS 0
#define JD_CONFIG_CONTROL_FLOOD 0
#define JD_CLIENT 1

#define JD_FLASH_PAGE_SIZE 2048

#endif
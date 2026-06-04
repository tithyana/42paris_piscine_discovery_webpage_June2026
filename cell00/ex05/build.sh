#!/bin/bash
if [ $# -eq 0 ]; then
    echo "No arguments suppied"
    exit 1
fi
for number in $*; do mkdir ex$number; done

#!/bin/bash
current_datetime=$(date +"%Y-%m-%d %H:%M:%S")
dev_log_dir="./dev_logs/"

file_name="$dev_log_dir$(date +"%Y-%m-%d".txt)"
echo $current_datetime >> $file_name

find ./frontend-nextjs/src/app/ -name '*.tsx' -not -path '*/node_modules/*' | xargs wc -l >> $file_name
find ./frontend-nextjs/src/app/ -name '*.ts' -not -path '*/node_modules/*' | xargs wc -l >> $file_name
find ./backend-flask/ -name 'env' -prune -o -name '*.py' -print0 | xargs -0 wc -l >> $file_name
echo "-------------------" >> $file_name
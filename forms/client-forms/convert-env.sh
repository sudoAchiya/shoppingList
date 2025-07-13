#!/bin/bash
input=${1:-'./'}.env
output=${1:-'./'}temp.js
final_output=${2:-'./public/environment.js'}
rm -rf $final_output
echo "window.config = {}" >$output

if [[ ! -f $input ]]; then
    printenv | grep VITE >$input
fi

while read line || [ -n "$line" ]; do
    if [[ $line =~ [^[:space:]] && ${line::1} != "#" ]]; then
        env_key="$(cut -d'=' -f1 <<<$line)"
        env_key_no_spaces=$(echo -e "${env_key}" | tr -d '[:space:]')
        env_value="$(cut -d'=' -f2 <<<$line)"
        env_value_no_spaces=$(echo -e "${env_value}" | tr -d '[:space:]')
        echo "window.config.$env_key_no_spaces='$env_value_no_spaces'" >>$output
    fi
done <"$input"

cat $output | while read line; do echo ${line}";" >>$final_output; done
rm -rf $output
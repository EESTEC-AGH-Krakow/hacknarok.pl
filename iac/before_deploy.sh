#!/bin/bash

USERNAME=$1
SERVER_ADDRESS=$2

printf "\nstart the ssh-agent to run ssh commands ...\n"
eval "$(ssh-agent -s)"

printf "\ncreate a temporary file to store the SSH key ...\n"
echo "$SSH_KEY" > /tmp/deploy_key
chmod 600 /tmp/deploy_key

printf "\nchange permissions on decrypted file to avoid warnings ...\n"
chmod 600 /tmp/deploy_key

printf "\ncreate ssh directory and avoid GitHub asking if we want to \"check\" the identity of target host (VPS) ...\n"
mkdir -p ~/.ssh
echo -e "Host $SERVER_ADDRESS\n\tStrictHostKeyChecking no\n" >> ~/.ssh/config
chmod 700 ~/.ssh
chmod 600 ~/.ssh/config

printf "\nadd the decrypted file as preferred ssh RSA key ...\n"
ssh-add /tmp/deploy_key

printf "\nrun the pwd command on the deployment server using the decrypted file as \"identity\" file (RSA Key) ...\n"
ssh -i /tmp/deploy_key "$USERNAME"@"$SERVER_ADDRESS" pwd

printf "\nconnectivity test has been completed successfully!\n"

# Clean up the temporary file
rm /tmp/deploy_key

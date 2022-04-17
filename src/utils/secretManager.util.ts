import { SecretManagerServiceClient } from '@google-cloud/secret-manager';

const secretsClient = new SecretManagerServiceClient();

const name = 'projects/789412283671/secrets/secret_test_1/versions/latest';

export async function accessSecretVersion() {
  const [version] = await secretsClient.accessSecretVersion({
    name: name,
  });

  // Extract the payload as a string.
  const payload = version.payload.data.toString();

  // WARNING: Do not print the secret in a production environment - this
  // snippet is showing how to access the secret material.
  return payload;
}

import type { ConfigService } from '@nestjs/config';
import type { UserStrategySamlOptions } from '@ultra/sso';

const createSamlSSOConfig = (
  configService: ConfigService,
): UserStrategySamlOptions => ({
  entryPoint: configService.get<string>('SSO_ENTRY_POINT'),
  issuer: configService.getOrThrow<string>('SSO_USER_ISSUER'),
  callbackUrl: configService.getOrThrow<string>('SSO_USER_CALLBACK'),
  authnContext: [configService.getOrThrow<string>('SSO_AUTHN_CONTEXT')],
  identifierFormat:
    configService.get('SSO_IDENTIFIER_FORMAT') === 'null'
      ? null
      : configService.get('SSO_IDENTIFIER_FORMAT'),
  signatureAlgorithm: configService.get('SSO_SIGNATURE_ALGORITHM'),
  racComparison: configService.get('SSO_RAC_COMPARISON'),
  acceptedClockSkewMs: +configService.get('SSO_ACCEPTED_CLOCK_SKE_MS'),
  idpCert: configService.getOrThrow<string>('SSO_IDP_CERT'),
  upnProfile: configService.getOrThrow<string>('SSO_UPN_PROFILE'),
  displayNameProfile: configService.getOrThrow<string>(
    'SSO_DISPLAY_NAME_PROFILE',
  ),
  wantAssertionsSigned:
    configService.get<string>('SSO_ASSERTION_SIGNED') === 'true',
});

export default createSamlSSOConfig;

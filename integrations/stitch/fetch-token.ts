import { getUrlEncodedFormData } from './utils';
import { StitchAccessTokenResponse, StitchAccessTokenRequest, StitchRefreshTokenRequest } from './types';
import { setStitchAccessToken } from '../storage/session-storage';
import { StitchTestEnvironmentConfiguration } from './client.test'

const tokenEndpoint = 'https://secure.stitch.money/connect/token';

export async function retrieveTokenUsingAuthorizationCode(
    authorizationCode: string,
    codeVerifier: string
): Promise<StitchAccessTokenResponse> {
    const { clientId, redirectUri } = StitchTestEnvironmentConfiguration;

    const body: StitchAccessTokenRequest = {
        grant_type: 'authorization_code',
        client_id: clientId,
        code: authorizationCode,
        redirect_uri: redirectUri,
        code_verifier: codeVerifier
    };

    const bodyString = getUrlEncodedFormData(body);
    const response = await fetch(tokenEndpoint, {
        method: 'post',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: bodyString
    });

    const tokenResponse = await response.json() as StitchAccessTokenResponse;
    console.log('Tokens: ', tokenResponse);

    setStitchAccessToken(tokenResponse.access_token);

    return tokenResponse;
}

export async function refreshAuthorizationCode(refreshToken: string) {
    const { clientId } = StitchTestEnvironmentConfiguration;

    const body: StitchRefreshTokenRequest = {
        grant_type: 'refresh_token',
        client_id: clientId,
        refresh_token: refreshToken
    };
    const bodyString = Object.entries(body).map(([k, v]) => `${k}=${encodeURIComponent(v)}`).join('&');

    const response = await fetch(tokenEndpoint, {
        method: 'post',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: bodyString
    });

    const responseBody = await response.json();
    console.log('Tokens: ', responseBody);

    const stitchAccessToken = responseBody as StitchAccessTokenResponse;
    console.log('Tokens: ', stitchAccessToken);

    return stitchAccessToken;
}
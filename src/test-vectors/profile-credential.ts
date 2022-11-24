export default {
  credentialSubject: {
    name: 'Alice',
    id: 'did:key:z6MkjaLirxP4QtbrbnNuACuJsn1cTB6ochiSvAaJ35zjtXqn'
  },
  issuer: { id: 'did:key:z6MkjaLirxP4QtbrbnNuACuJsn1cTB6ochiSvAaJ35zjtXqn' },
  type: [ 'VerifiableCredential', 'Profile' ],
  '@context': [
    'https://www.w3.org/2018/credentials/v1',
    'https://veramo.io/contexts/profile/v1'
  ],
  issuanceDate: '2022-11-24T19:00:26.000Z',
  proof: {
    type: 'JwtProof2020',
    jwt: 'eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJ2YyI6eyJAY29udGV4dCI6WyJodHRwczovL3d3dy53My5vcmcvMjAxOC9jcmVkZW50aWFscy92MSIsImh0dHBzOi8vdmVyYW1vLmlvL2NvbnRleHRzL3Byb2ZpbGUvdjEiXSwidHlwZSI6WyJWZXJpZmlhYmxlQ3JlZGVudGlhbCIsIlByb2ZpbGUiXSwiY3JlZGVudGlhbFN1YmplY3QiOnsibmFtZSI6IkFsaWNlIn19LCJzdWIiOiJkaWQ6a2V5Ono2TWtqYUxpcnhQNFF0YnJibk51QUN1SnNuMWNUQjZvY2hpU3ZBYUozNXpqdFhxbiIsIm5iZiI6MTY2OTMxNjQyNiwiaXNzIjoiZGlkOmtleTp6Nk1ramFMaXJ4UDRRdGJyYm5OdUFDdUpzbjFjVEI2b2NoaVN2QWFKMzV6anRYcW4ifQ.Qa4CeP_C10e4cDFZV-EhRACLlwCMZj-oc7_Qgva9UdTeHQtl6rBjnjvd8kAu_Q_ZlXWL8H4hxpf-SIopGNFqCQ'
  }
}
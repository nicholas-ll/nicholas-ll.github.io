function auth() {
    if (window.PublicKeyCredential) {
        options =  {
            publicKey: {
              rp: { id: "nicholas-ll.github.io",
                    name: "Web Test" },
              user: { id: "1234",
                      name: "user@example.com",
                      displayName: "Web Test User" },
              challenge: "3c91e721-6811-4b8c-aedc-5cfa2ae41121", //chosen by fair dice roll. guaranteed to be random
              pubKeyCredParams: [ { type: "public-key", alg: -7 }],
                      authenticatorSelection: {}
            }
          };
          
        navigator.credentials.create(options);
      } else {
        alert("PublicKeyCredentials not supported");
      }
}
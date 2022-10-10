const express = require("express");
const router = express.Router();
const fs = require('fs');

const manifest1 = {
  "max-cache-minutes": 15,
  "keys": [
    {
      "kid": "bzZ5JDkuBGi0oplEvod2TptRHH7K90WEEe90pdK9iCk",
      "key": "MIICmzCCAYMCBgGC3hTbcjANBgkqhkiG9w0BAQsFADARMQ8wDQYDVQQDDAZrb25nLWgwHhcNMjIwODI3MDY1MzA1WhcNMzIwODI3MDY1NDQ1WjARMQ8wDQYDVQQDDAZrb25nLWgwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQC8OqSnRDMsgumTle/A8TlNioIgVMQ4Ub2lLhxCjF6OHuID8WIuysyc3mir1ay7VDexrGko3dQX6x13I7oTH6TbxEp00MH7TsbwL/cEei2uUoO6aowVwXsoYTtjOLxKWYQ/EAAWu8UoghHQaAeFaL9BsVdk8N4su0/np9xBOEgARShlvJ/+AOrhBcM/OqvmQy07L6gMtZg/3riQ+kI8YRYuXRdGlN4bEP+hmptwMwavA6w9hgjz5APRPu9oIIynNl08taB7l36pVLj6Qxux23CmzdBlEFRfF46cBpGjwC5DQt0KdMna4Ky77gSirTINp7XXIqENzaYo5PBqyRcsGPrbAgMBAAEwDQYJKoZIhvcNAQELBQADggEBALBF8FN9bNVdS5uGxC+HTqUZAhhSS7/ZA1PNIt+QaNRJtJ2DAWXFNvWI2glCR4k97xJM0uQcbZR1zHYAez8tNitM43mEeCQQOl4A5ekfKDEM2jfVPOIyD5WpLYYV7RLmqfOCvncMV7Tf+sJ8vz0lRK+ZDpMcIeBLcVBiZ//gl8M8lSP/HZTUccwFjUeWHdlaBgyhjpbkFqohcYVoJlGT/b86d7S/w+sPUYbFiI99eUhSsiLBnPpbab01GoSDJ/EWulNh3oPbNhbJz5w5rsQgqWsDugo/VhXZrglJ4V7sQ6zcZDZ/JOqlGiba86fA/ldVHrz0hNaTfAEpTA6PwxX6/l8="
    },
    {
      "kid": "230498151c214b788dd97f22b85410a5",
      "key": "MIIC0zCCAbugAwIBAgICA+gwDQYJKoZIhvcNAQELBQAwFjEUMBIGA1UEAwwLZXhh\nbXBsZS5jb20wHhcNMjIwOTEyMDQxNzQ3WhcNMzIwOTA5MDQxNzQ3WjAWMRQwEgYD\nVQQDDAtleGFtcGxlLmNvbTCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEB\nALC0TnOOo4uZF1qJdkRkfwwml0p00yrmYANp48UyLT9Ai9+2fRI5SVRe7mri3eSx\nBT7TtUsOS1MsRMyeoqnIp4b612kITmvvQ6E96AKuf2X+ifUZC2wKP2u9zUxnmMga\nqGpIm8H6moZBSFndZ1vlgkwfb8ZO6fK/znvaV7DtwNrrmTpz0bD5RlOE/AfwdES8\n4M3iyepFR/2ECUvNyHxVnsQU1j/ImWMWuLmIaQi5Twp1KFTBZU1TA26eRlNOvR5G\nX2wIABnAZxOJfnN9GOHLc0PjExQQEODUDFp/P6kKfVDtAJ3N8vBJwJ4m8G7Cvq5n\n7OE1g7fJ9kmndq4nJctG5m8CAwEAAaMrMCkwDwYDVR0TBAgwBgEB/wIBADAWBgNV\nHREEDzANggtleGFtcGxlLmNvbTANBgkqhkiG9w0BAQsFAAOCAQEASfe7+hjVlOh1\nNcuQyjo8xRiq8IWjK7wZyz76j10kJCCsG+syldcghPZiaERoufsvrwb0gcPDs9if\nMl+Lo8XC8nux5SfSkRGjxun6CPjAxyqVk7AwGh1RlT80b2ZIVUZxf9TFUBlAt5kF\n1IFC+MoM3VAG2/Cn1n78EVdeSKG/3/qJ8NfxmVta+902q6ZlYUSC4hqQuFaETwJj\ncSLGFufAfoRUOVUSckkCZUQGvRjcr8Ui1/bESPDSQCFPLvJ8BbGZpS+Ydv2Qxja5\nkW7uwrhiyL5PWe8PnL9XWmKIqZOCL1J8dvBHy2za8G7eGBAQ0wq8TMywvfhHX8i5\nI1n7tBzAnw=="
    }
  ],
  "alg": "RS256",
  "x5c": ["k1", "k2"]
}


const newManifest = {
  "max-cache-minutes": 15,
  "keys": [
    {
      "kid": "17GLrwRZj5LzsI7lNyxTJd0EGPeXYT6qbb7lcLsCTwQ",
      "key": "MHwwDQYJKoZIhvcNAQEBBQADawAwaAJhAKYrPE9aOnrYTmxPaVmHcNTfNno0hzJ9GOmi9l1tWVHMwklpSZhgskY3q9/lJvpo4u4trZEuWTm4rnBLggAewGN/3/Vg971QK/bqmfrh+ZsI6v8HdgZRIIULrJvoEA8tXwIDAQAB"
    }
  ],
  "alg": "RS256",
  "x5c": [
    "k1",
    "k2"
  ]
}


const newManifest2 = {
  "keys": [
    {
      "kty": "RSA",
      "kid": "Ab2crSw-uWmGGs0cQZA1EGCdWr8ft43oRO_RD9gcJRA",
      "n": "6QMYv54LxapxYay4klo6GrZwJC_2t2Bf_pDyuvwaSUJwuAC92HIZNrOqwwTwr2fkm88gWkpLRLkQA4CsgnxtjETkg-f0kQDLRi6bE19uhWHkHmSjBlG1uOA4YTVQ8ft7NvobECvLCCQTaDv5gAJ9fXzBOQPBVq4LFi0vS2KAQ4YkKBkFeguYjAkOKAEekY3Bd0OB_ZUNmxoYbwEnc4TUWCSkvdAnQkco7-75HqUf4c9nXQAn2kxo_tZCvdM_K8zMIIlc-BZ4sgSSRNpTrAXzTUDGbCk04Stgowjvzv9dtEDI2iooYCY6vwpbSnFwGbq-CvGpMdz87G4FU-ud4hLGtQ",
      "e": "AQAB",
      "alg": "RS256"
    }
  ]
}


const manifest0 = {
  "max-cache-minutes": 20,
  "keys": [
    {
      "kid": "bzZ5JDkuBGi0oplEvod2TptRHH7K90WEEe90pdK9iCk",
      "key": "MIICmzCCAYMCBgGC3hTbcjANBgkqhkiG9w0BAQsFADARMQ8wDQYDVQQDDAZrb25nLWgwHhcNMjIwODI3MDY1MzA1WhcNMzIwODI3MDY1NDQ1WjARMQ8wDQYDVQQDDAZrb25nLWgwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQC8OqSnRDMsgumTle/A8TlNioIgVMQ4Ub2lLhxCjF6OHuID8WIuysyc3mir1ay7VDexrGko3dQX6x13I7oTH6TbxEp00MH7TsbwL/cEei2uUoO6aowVwXsoYTtjOLxKWYQ/EAAWu8UoghHQaAeFaL9BsVdk8N4su0/np9xBOEgARShlvJ/+AOrhBcM/OqvmQy07L6gMtZg/3riQ+kI8YRYuXRdGlN4bEP+hmptwMwavA6w9hgjz5APRPu9oIIynNl08taB7l36pVLj6Qxux23CmzdBlEFRfF46cBpGjwC5DQt0KdMna4Ky77gSirTINp7XXIqENzaYo5PBqyRcsGPrbAgMBAAEwDQYJKoZIhvcNAQELBQADggEBALBF8FN9bNVdS5uGxC+HTqUZAhhSS7/ZA1PNIt+QaNRJtJ2DAWXFNvWI2glCR4k97xJM0uQcbZR1zHYAez8tNitM43mEeCQQOl4A5ekfKDEM2jfVPOIyD5WpLYYV7RLmqfOCvncMV7Tf+sJ8vz0lRK+ZDpMcIeBLcVBiZ//gl8M8lSP/HZTUccwFjUeWHdlaBgyhjpbkFqohcYVoJlGT/b86d7S/w+sPUYbFiI99eUhSsiLBnPpbab01GoSDJ/EWulNh3oPbNhbJz5w5rsQgqWsDugo/VhXZrglJ4V7sQ6zcZDZ/JOqlGiba86fA/ldVHrz0hNaTfAEpTA6PwxX6/l8="
    },
    {
      "kid": "pU_PztsZ8NU_6QhLay84xgeqjlrSqhQBnv5XwaRcFpY",
      "key": "MIICmzCCAYMCBgGC3hTanzANBgkqhkiG9w0BAQsFADARMQ8wDQYDVQQDDAZrb25nLWgwHhcNMjIwODI3MDY1MzA0WhcNMzIwODI3MDY1NDQ0WjARMQ8wDQYDVQQDDAZrb25nLWgwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQCj36hSXWB+9j/YqHnXkPUjNQz9IR/EWQRXNFEome6JmV6ulBU9vt4wmi1b2xjmoD+Z8uBg15khZ776ftmnJvZesk0CDq9OJW3niGgXwPGsXWf0E39fZrBdGL1EM9vLwSqqyTETNabqD/lsgA4rwIVWr+z0vMXvwGB4LYW/LNOzUy6V7mmAuPxg2ixlmCNLw/ACAvqKcdBypl8Xh9B/A+eMk5p3OT/7BRaAiF49JJEkctZThE5YBwYC+IZ+8qXEC66t0MmcojgnQnaYwS4ZBmrcOg3s1QLnsUavUxtdvQsLk+ORy5LBXelcereHGdp/50R7JwLAkzkAruTi2D1B0vRlAgMBAAEwDQYJKoZIhvcNAQELBQADggEBAIKVnA2hpuZVwvAlT1CYXzDUEoHQt9K3L/kSemURtxkiF8vTkjw19nmieDmpxVR2S1bIR/B+Bmgv0jS0ieL33AbHgGfpgE0oWZ2nUO53VzgNexCnSOPuCQevHEFbaRRkjZtoAQJdMriE0khSSZlgjlUlgsjIteY/S6xKVUw/iEU1xWLVcICNaqt1IUwfOX6omkEmSTEAFhkEj7lFEEekBPfQ0Sa9rOxmEnpkUY+I3k8YAlEWnFCdkV7lM5PlHdgmwFsnNlN7khec3bK5ku23LL1BEX0EM9ZR7hE0JZl5G1LUPTgqmJbIyXX6R9AtbaDsb8VSpwX7Fpy0q3AJtl5hAg8="
    }
  ],
  "alg": "RS256",
  "x5c": ["k1", "k2"]
}

const manifest = {
  "keys": [
    {
      "kid": "bzZ5JDkuBGi0oplEvod2TptRHH7K90WEEe90pdK9iCk",
      "kty": "RSA",
      "alg": "RSA-OAEP",
      "use": "enc",
      "n": "vDqkp0QzLILpk5XvwPE5TYqCIFTEOFG9pS4cQoxejh7iA_FiLsrMnN5oq9Wsu1Q3saxpKN3UF-sddyO6Ex-k28RKdNDB-07G8C_3BHotrlKDumqMFcF7KGE7Yzi8SlmEPxAAFrvFKIIR0GgHhWi_QbFXZPDeLLtP56fcQThIAEUoZbyf_gDq4QXDPzqr5kMtOy-oDLWYP964kPpCPGEWLl0XRpTeGxD_oZqbcDMGrwOsPYYI8-QD0T7vaCCMpzZdPLWge5d-qVS4-kMbsdtwps3QZRBUXxeOnAaRo8AuQ0LdCnTJ2uCsu-4Eoq0yDae11yKhDc2mKOTwaskXLBj62w",
      "e": "AQAB",
      "x5c": [
        "MIICmzCCAYMCBgGC3hTbcjANBgkqhkiG9w0BAQsFADARMQ8wDQYDVQQDDAZrb25nLWgwHhcNMjIwODI3MDY1MzA1WhcNMzIwODI3MDY1NDQ1WjARMQ8wDQYDVQQDDAZrb25nLWgwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQC8OqSnRDMsgumTle/A8TlNioIgVMQ4Ub2lLhxCjF6OHuID8WIuysyc3mir1ay7VDexrGko3dQX6x13I7oTH6TbxEp00MH7TsbwL/cEei2uUoO6aowVwXsoYTtjOLxKWYQ/EAAWu8UoghHQaAeFaL9BsVdk8N4su0/np9xBOEgARShlvJ/+AOrhBcM/OqvmQy07L6gMtZg/3riQ+kI8YRYuXRdGlN4bEP+hmptwMwavA6w9hgjz5APRPu9oIIynNl08taB7l36pVLj6Qxux23CmzdBlEFRfF46cBpGjwC5DQt0KdMna4Ky77gSirTINp7XXIqENzaYo5PBqyRcsGPrbAgMBAAEwDQYJKoZIhvcNAQELBQADggEBALBF8FN9bNVdS5uGxC+HTqUZAhhSS7/ZA1PNIt+QaNRJtJ2DAWXFNvWI2glCR4k97xJM0uQcbZR1zHYAez8tNitM43mEeCQQOl4A5ekfKDEM2jfVPOIyD5WpLYYV7RLmqfOCvncMV7Tf+sJ8vz0lRK+ZDpMcIeBLcVBiZ//gl8M8lSP/HZTUccwFjUeWHdlaBgyhjpbkFqohcYVoJlGT/b86d7S/w+sPUYbFiI99eUhSsiLBnPpbab01GoSDJ/EWulNh3oPbNhbJz5w5rsQgqWsDugo/VhXZrglJ4V7sQ6zcZDZ/JOqlGiba86fA/ldVHrz0hNaTfAEpTA6PwxX6/l8="
      ],
      "x5t": "HasCIJekBe9lX1kug7ZIUYumIp4",
      "x5t#S256": "lvzf5DhvAWXV57RbrnnwbxtNZ17amtstJIKWDalnv8s"
    },
    {
      "kid": "pU_PztsZ8NU_6QhLay84xgeqjlrSqhQBnv5XwaRcFpY",
      "kty": "RSA",
      "alg": "RS256",
      "use": "sig",
      "n": "o9-oUl1gfvY_2Kh515D1IzUM_SEfxFkEVzRRKJnuiZlerpQVPb7eMJotW9sY5qA_mfLgYNeZIWe--n7Zpyb2XrJNAg6vTiVt54hoF8DxrF1n9BN_X2awXRi9RDPby8EqqskxEzWm6g_5bIAOK8CFVq_s9LzF78BgeC2FvyzTs1Mule5pgLj8YNosZZgjS8PwAgL6inHQcqZfF4fQfwPnjJOadzk_-wUWgIhePSSRJHLWU4ROWAcGAviGfvKlxAuurdDJnKI4J0J2mMEuGQZq3DoN7NUC57FGr1MbXb0LC5PjkcuSwV3pXHq3hxnaf-dEeycCwJM5AK7k4tg9QdL0ZQ",
      "e": "AQAB",
      "x5c": [
        "MIICmzCCAYMCBgGC3hTanzANBgkqhkiG9w0BAQsFADARMQ8wDQYDVQQDDAZrb25nLWgwHhcNMjIwODI3MDY1MzA0WhcNMzIwODI3MDY1NDQ0WjARMQ8wDQYDVQQDDAZrb25nLWgwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQCj36hSXWB+9j/YqHnXkPUjNQz9IR/EWQRXNFEome6JmV6ulBU9vt4wmi1b2xjmoD+Z8uBg15khZ776ftmnJvZesk0CDq9OJW3niGgXwPGsXWf0E39fZrBdGL1EM9vLwSqqyTETNabqD/lsgA4rwIVWr+z0vMXvwGB4LYW/LNOzUy6V7mmAuPxg2ixlmCNLw/ACAvqKcdBypl8Xh9B/A+eMk5p3OT/7BRaAiF49JJEkctZThE5YBwYC+IZ+8qXEC66t0MmcojgnQnaYwS4ZBmrcOg3s1QLnsUavUxtdvQsLk+ORy5LBXelcereHGdp/50R7JwLAkzkAruTi2D1B0vRlAgMBAAEwDQYJKoZIhvcNAQELBQADggEBAIKVnA2hpuZVwvAlT1CYXzDUEoHQt9K3L/kSemURtxkiF8vTkjw19nmieDmpxVR2S1bIR/B+Bmgv0jS0ieL33AbHgGfpgE0oWZ2nUO53VzgNexCnSOPuCQevHEFbaRRkjZtoAQJdMriE0khSSZlgjlUlgsjIteY/S6xKVUw/iEU1xWLVcICNaqt1IUwfOX6omkEmSTEAFhkEj7lFEEekBPfQ0Sa9rOxmEnpkUY+I3k8YAlEWnFCdkV7lM5PlHdgmwFsnNlN7khec3bK5ku23LL1BEX0EM9ZR7hE0JZl5G1LUPTgqmJbIyXX6R9AtbaDsb8VSpwX7Fpy0q3AJtl5hAg8="
      ],
      "x5t": "fAxXtUmVvajePCvmlZ94U_QPSc4",
      "x5t#S256": "wDEMkkuYMat1IU7ijAQ983VL2wO4nhLqP4EgULzdJIU"
    }
  ]
}

/* token validation. */
router.get("/", function(req, res, next) {
  console.log('manifest')
  let rawdata = fs.readFileSync('/manifest/manifest.json');
  let manifest = JSON.parse(rawdata);
  res.json(manifest)
});

module.exports = router;

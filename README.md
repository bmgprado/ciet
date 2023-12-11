# ciet

In the repository, we have 3 files:

1. bugereats.cy.ts
This file contains 2 test cases:
Invalid CPF and no diver's license: fills in all the fields, except CPF and CNH image, and submits the form. An error message is shown below CPF field, and the form is not sent. We check if this error message is visible. If it is, the test passed. There's no error message for CNH in this case.
Complete registration: we fill in all the fields and submit the form. We check if the success message is visible. If it is, the test passed.

2. iframe.cy.ts
Complete submition: we access the iframe where the Contact us link is placed. We click it and have access to the form. We fill in all the fields and submit the form. We check if the success message is visible. If it is, the test passed.

3. bug.jpg
This is the image used as CNH in bugereats.cy.ts > Complete registration

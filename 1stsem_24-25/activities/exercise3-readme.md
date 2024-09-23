### Exercise 3 Adding an image, external link, icons
1. Get a copy of the image file on your hard drive so you can see it in place when you open the file locally.
2. Once you’ve got the image, insert it at the beginning of the first-level heading by typing in the img element and its attributes as shown here:
(h1)(img src="<your-image>.jpg" alt="Joe Bloggs")Your Name(h1)
The src attribute provides the name of the image file that should be inserted, and the alt attribute provides text that should be displayed if the image is not available. Both of these attributes are required in every img element.

3. Do the same for the contact details but instead of adding the file using the image path, use the src attribute to look for the image available in the internet and use the following values:
for email: https://raw.githubusercontent.com/milkylee/webdev/master/1stsem_23-24/activities/mail.png
for website: https://raw.githubusercontent.com/milkylee/webdev/master/1stsem_23-24/activities/world-wide-web.png
4. Set the style attribute value to width: 20px and height: 20px
5. Make an image link by adding the anchor element and assign the href value to https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=someone@example.com for the email image
6. Change the telephone icon using an external package by adding (link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css") in head element and use (i class="fa fa-mobile")(i) beside the telephone number in body element.

Figure 3 shows how it should look now

![Figure 3](/1stsem_23-24/activities/exercise3.png)


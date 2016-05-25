# subscribeList

A node script to add users to a given list upon entering info into a form.  Following these steps:

1. Create a list on your SendGrid dashboard
2. Insert this code snippet to respond to the post action of the user submitting a form
3. Replace the following items with their appropriate values
<br> - API_KEY -> your API key generated from your account dashboard
<br> - vars: {INSERT EMAIL} and {INSERT LAST NAME} -> appropriate form data
<br> - {LIST ID} -> this can be found in the URL of your specified list as the characters following the last '/'


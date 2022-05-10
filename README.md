# ContactFinder
 
ContactFinder is an add-on allowing you to autocomplete a list of contact when sending a message by searching their name in the address book.

https://addons.thunderbird.net/en-US/thunderbird/addon/contact-finder

## Usage

Let's say you have theses contacts :

![image](https://user-images.githubusercontent.com/53106394/167496568-12ae4fd2-b0b5-43bd-8f79-e90bd777d43f.png)

You have this spreadsheet and you want to send them an email :

![image](https://user-images.githubusercontent.com/53106394/167496786-1c5125ef-555b-4c0c-9959-6dfd0a837da3.png)

If you try to copy and paste the three rows to thunderbird you will not be able to send them an email (you need to **press tab** to validate the paste) :

![image](https://user-images.githubusercontent.com/53106394/167497089-96c15bec-206c-4eb3-a0e6-dbee27eb6891.png)

Thunderbird require an email and not an name to be able to send the email, even if theses are in your contact list.

You can either use autocomplete on **each one** of the recipient, or you can use this add-on.

![image](https://user-images.githubusercontent.com/53106394/167497566-5d6162fc-13f1-4a7e-87f1-d68093c02348.png)

In one click on the add-on button, thunderbird will find contact associated to the name.

![image](https://user-images.githubusercontent.com/53106394/167497726-e452b40c-f0b7-42cd-8814-ad0381b1f42d.png)

This can be very usefull if you have a big number of recipient. However be carefull as sending to too many people might flag you as a spammer.

If thunderbird can find the associated contact (because he found no-one or several), it will not replace the recipient.

For exemple if you copy past theses rows and press tab :

![image](https://user-images.githubusercontent.com/53106394/167498031-1d1d66d1-27cd-4c2d-9268-7d1a87e41d38.png)

You will get :

![image](https://user-images.githubusercontent.com/53106394/167498147-bb3cbad5-a066-44b5-aa7d-aa9a947081e5.png)

And if you press the Contact Finder button, you will get :

![image](https://user-images.githubusercontent.com/53106394/167498212-fa4eb8cc-f926-460d-bf3b-243790c22344.png)

Because :

- It doesn't know if you means Pierre Dupont or Pierre Dubois

- It couldn't find any Sophie in your contact

## Troubleshooting

If it doesn't work, check that you pressed tabs after pasting the recipient. It should have a red background behind each recipient.

## Licensing

The extension is under MIT exept the icon (see icon-attribution.txt).


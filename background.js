async function click(tab) {

    const composeDetails = await messenger.compose.getComposeDetails(tab.id);

    for (let k = 0; k < composeDetails.to.length; k++) {
        let dest = composeDetails.to[k];
        // contact can either be a string (entered by user) or an object (from address book)
        if (typeof dest === 'string') {
            if (!dest.includes('@')) { // Only search recipient which doesn't already have an email address
                dest = dest.replace(/<[^>]*>/, "");
                const contacts = await messenger.contacts.quickSearch(null, dest);
                if (contacts.length === 1) {
                    composeDetails.to[k] = {
                        id: contacts[0].id,
                        type: 'contact'
                    }
                } else {
                    if (contacts.length === 0) {
                        dest = dest + ' <not found>';
                    } else {
                        dest = dest + ' <several found>';
                    }
                    composeDetails.to[k] = dest;
                }
            }
        }
    }

    await messenger.compose.setComposeDetails(tab.id, {
        to: composeDetails.to
    });

}
messenger.composeAction.onClicked.addListener(click);
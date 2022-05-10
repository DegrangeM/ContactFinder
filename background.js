async function click(tab) {

    await messenger.composeAction.disable(tab.id);

    messenger.composeAction.setBadgeText({ text: '...' });

    const composeDetails = await messenger.compose.getComposeDetails(tab.id);

    let K = 0;
    let M = composeDetails.to.length + composeDetails.cc.length + composeDetails.bcc.length;    // total number of recipients
    let progress = '';

    for (field of ['to', 'cc', 'bcc']) {
        for (let k = 0; k < composeDetails[field].length; k++, K++) {
            if(parseInt(K/M * 100) !== progress) {
                progress = parseInt(K/M * 100);
                messenger.composeAction.setBadgeText({ text: progress + '%' });
            }
            let dest = composeDetails[field][k];
            // contact can either be a string (entered by user) or an object (from address book)
            if (typeof dest === 'string') {
                if (!dest.includes('@')) { // Only search recipient which doesn't already have an email address
                    dest = dest.replace(/<[^>]*>/, "");
                    const contacts = await messenger.contacts.quickSearch(null, dest);
                    if (contacts.length === 1) {
                        composeDetails[field][k] = {
                            id: contacts[0].id,
                            type: 'contact'
                        }
                    } else {
                        if (contacts.length === 0) {
                            dest = dest + ' <not found>';
                        } else {
                            dest = dest + ' <several found>';
                        }
                        composeDetails[field][k] = dest;
                    }
                }
            }
        }
    }

    await messenger.compose.setComposeDetails(tab.id, {
        to: composeDetails.to,
        cc: composeDetails.cc,
        bcc: composeDetails.bcc
    });

    messenger.composeAction.setBadgeText({ text: null });
    messenger.composeAction.enable(tab.id);

}
messenger.composeAction.onClicked.addListener(click);
async function load() {
    // console.log(messenger)
    // console.log(messenger.compose)
    // console.log(messenger.compose.getComposeDetails)
    const tabs = await messenger.tabs.query({
        active: true,
        currentWindow: true
    });
    const composeDetails = await messenger.compose.getComposeDetails(tabs[0].id);

    const listOutput = document.createElement('ul');
    console.log('afsdfsdf')

    for (let k = 0; k < composeDetails.to.length; k++) { //let dest of composeDetails.to) {
        let dest = composeDetails.to[k];
        if (typeof dest === 'string') {
            if (!dest.includes('@')) {
                dest = dest.replace('<>', '');
                console.log('Analysing: ' + dest);
                const contacts = await messenger.contacts.quickSearch(null, dest);
                if (contacts.length === 1) {
                    composeDetails.to[k] = {
                        id: contacts[0].id,
                        type: 'contact'
                    }
                    console.log('found: ' + contacts[0].id);
                } else {
                    composeDetails.to[k] = dest; // Avoid a bug where <> is added at the end
                    const li = document.createElement('li');
                    if(contacts.length === 0) {
                        li.textContent = dest + ' (not found)';
                    } else {
                        li.textContent = dest + ' (multiples founds)';
                    }
                    console.log('error')
                    listOutput.appendChild(li);
                }
            }
        }
    }

    document.body.appendChild(listOutput);

    await messenger.compose.setComposeDetails(tabs[0].id, {
        to: composeDetails.to
    });
}
document.addEventListener("DOMContentLoaded", load);

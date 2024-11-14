export let removeNotification = (id) => {
    setTimeout(() => {
        try {
            $(`#${id}`).remove();
        } catch (error) { removeNotification(`Error occurred while removing notification`) }
    }, 60000)
};
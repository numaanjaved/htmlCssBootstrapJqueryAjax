import { errorNotification } from "./Alerts/errorNotification.js";
import { recordRow } from "./record.js";
import { usersDataMainContainer } from "./record.js";
export let refreshRecords = () => {
    $(usersDataMainContainer).html(``);
    try {
        let LS = JSON.parse(localStorage.getItem('Data'));
        if (LS !== null) {
            $.each(LS, (ind, record) => {
                recordRow([record.pic,
                record.userId,
                `${record.firstName} ${record.lastName}`,
                record.userType])
            });
        }
    } catch (error) { errorNotification(`Error Occurred while Refreshing Records`); }
}
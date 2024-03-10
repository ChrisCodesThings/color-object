
export default function (arr) {
    if (!Array.isArray(arr)) {
        return false;
    }

    return (
        (arr.length == 3 || arr.length == 4)
        && arr[0] >= 0 && arr[0] <= 255
        && arr[1] >= 0 && arr[1] <= 255
        && arr[2] >= 0 && arr[2] <= 255
        && (arr.length == 4 ? arr[3] >= 0 && arr[3] <= 1 : true)
    )
}

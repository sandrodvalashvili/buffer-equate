/**
 * Compares a buffer to a string, number, or an array of numbers and returns a boolean indicating whether they are equivalent.
 * 
 * - If the input is a string:
 *   - A single character is treated as a UTF-8 character.
 *   - A string of even length is treated as a hexadecimal representation.
 * 
 * - If the input is a number:
 *   - The number should be a positive integer (max: 2147483647).
 *   - The number is transcoded to its buffer representation.
 * 
 * - If the input is an array of numbers:
 *   - Each number should be an integer (max: 255).
 *   - The array is converted to a buffer.
 * 
 * @param {Buffer} b - The buffer to compare.
 * @param {string|number|number[]} i - The input to compare against the buffer.
 * @returns {boolean} - Returns true if the buffer equals the converted input, otherwise false.
 */
export default function (b, i) {
    return b.equals(
        typeof i == "string" && (i.length != 0 && i.length % 2 == 0 || i.length == 1)
        ?
        Buffer.from(i, i.length == 1 ? "utf8" : "hex")
        :
        typeof i == "number"
        ?
        Buffer.from(((i) => {
            let a = [i];
            let s = a[0] >> 8;
            while (s != 0) {
                a.unshift(s);
                a[1] = a[1] - s * 256;
                s = a[0] >> 8;
            }
            return a
        })(i))
        :
        Array.isArray(i) && i.every(e => typeof e === 'number')
        ?
        Buffer.from(i)
        :
        Buffer.alloc(0)
    )
}
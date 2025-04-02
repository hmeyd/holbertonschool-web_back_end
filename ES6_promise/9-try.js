/* eslint-disable */
export default function guardrail(mathFunction) {
    const queue = [];
    try {
        const result = mathFunction(); 
        queue.push(result);
    }catch(error) {
        queue.push(Error.message);
    }
    queue.push("Guardrail was processed");
    return queue;
}

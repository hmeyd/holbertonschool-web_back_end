/* eslint-disable */
export default function guardrail(mathFunction) {
    const queue = [];
    try {
      queue.push(mathFunction());
    } catch (err) {
      queue.push(`${err}`);
    }
    queue.push('Guardrail was processed');
    return queue;
  }
  
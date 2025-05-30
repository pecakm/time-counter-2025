export const encodeParams = (timestamp: number, event?: string) => {
  const timestampStr = timestamp.toString(36);
  const eventStr = event ? btoa(event).replace(/=+$/, '') : '';
  
  return `${timestampStr}${eventStr ? `.${eventStr}` : ''}`;
};

export const decodeParams = (encoded: string) => {
  const [timestampStr, eventStr] = encoded.split('.');
  const timestamp = parseInt(timestampStr, 36);
  const event = eventStr ? atob(eventStr) : undefined;
  
  return { timestamp, event };
};

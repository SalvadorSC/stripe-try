export const mockTrackingEvents = ({
  event,
  description,
}: {
  event: string;
  description: unknown;
}) => {
  console.log(`Analytics Event:`, event, description);
};

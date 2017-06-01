export function sortObservationsByDate(observations) {
  return observations.sort((a, b) => {
      let prev = new Date(a.obervedAt);
      let next = new Date(b.obervedAt);
      return prev - next;
    }
  );
}
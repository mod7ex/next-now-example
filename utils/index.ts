export const fetchNow = async () => {
  const response = await fetch("http://localhost:3000/api/now");
  if (!response.ok) throw Error("Something went wrong");
  const { now } = <{ now: INow }>await response.json();
  return now;
};

export const timeSnapshot = () => {
  const _timeSnapshot = new Date();

  return {
    hours: _timeSnapshot.getHours(),
    minutes: _timeSnapshot.getMinutes(),
    seconds: _timeSnapshot.getSeconds(),
  };
};

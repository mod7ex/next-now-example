import { DURATION } from "~/constants";

class Store {
  private _subscribers = new Set<Fn>();
  private _now = {
    seconds: 0,
    minutes: 0,
    hours: 0,
  };

  get now() {
    return this._now;
  }

  set(payload: INow) {
    this._now = { ...payload };

    this.notify();
  }

  subscribe(notify: Fn) {
    this._subscribers.add(notify);

    return () => this._subscribers.delete(notify);
  }

  notify() {
    this._subscribers.forEach((fn) => fn());
  }

  init(payload: INow) {
    this._now = { ...payload };

    const timer = setInterval(() => {
      fetch("/api/now")
        .then<{ now: INow }>((res) => res.json())
        .then(({ now }) => {
          this.set(now);
        });
    }, DURATION);

    return () => clearInterval(timer);
  }
}

const store = new Store();

export default store;

import React, { useState, useEffect } from "react"


const App = () => {
  const [isCharging, setIsCharging] = useState<boolean>(false);

  const onChargingChange = () => {
    (window.navigator as any).getBattery().then((battery: any) => {
      setIsCharging(battery.charging)
    })
  };

  useEffect(() => {
    (window.navigator as any).getBattery().then((battery: any) => {
      battery.addEventListener('chargingchange', onChargingChange);
      setIsCharging(battery.charging)
    })

    return () => {
      (window.navigator as any).getBattery().then((battery: any) => {
        battery.removeEventListener('chargingchange', onChargingChange);
      })
    }
  }, [])

  return (
    <div>
      <h1>Hello world</h1>
      <h1>{"Battery is " + (isCharging ? "charging" : "discharging")}</h1>
    </div>
  );
}

export default App;

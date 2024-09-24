import { useState } from 'react';
import Button from '../components/Button'

export default function Alert() {
  const [alertVisible, setAlertVisible] = useState(false);

  const showAlert = () => {
    setAlertVisible(true);
    setTimeout(() => setAlertVisible(false), 3000); // Hides after 3 seconds
  };

  return (
    <>
      {/* Alert banner */}
      <div id="liveAlertPlaceholder">
        {alertVisible && (
          <div className="flex justify-between items-center bg-green-100 border border-green-400 text-green-700 p-5 rounded relative">
            This is an alert message!
            <button onClick={() => setAlertVisible(false)}></button>
          </div>
        )}
      </div>
      <Button primary rounded onClick={showAlert}>
        Show live alert
      </Button>
    </>
  );
}

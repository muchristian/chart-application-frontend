import { WelcomeSVG } from "../../utils/WelcomeSVG";

export default function Welcome() {
  return (
    <div className="self-center bg-white dark:bg-gray-900">
      <div className="pl-5">
        <WelcomeSVG />
        <div className="text-center">
          <h2 className="text-xl text-gray-500 dark:text-gray-400">
            Select a Chat to Start Messaging
          </h2>
        </div>
      </div>
    </div>
  );
}

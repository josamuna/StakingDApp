import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import StakeDetails from "../components/StakeDetails";
import StakeForm from "../components/StakeForm";
import WithdrawForm from "../components/WithdrawForm";

export default function Home() {
  return (
    <main className="bg-gradient-to-r from-zinc-300 to-indigo-600">
      {/* <div className={` ${styles.container}`}>
        <Header />
        <StakeDetails />
        <StakeForm />
      </div>
      <div className={` ${styles.container}`}>
        <WithdrawForm />
      </div> */}

      <div className={` ${styles.container}`}>
        <Header />
        <StakeDetails />
      </div>
      <div className="flex flex-row">
        <div className="grow h-14 ml-8 mr-4">
          <StakeForm />
        </div>
        <div className="grow h-14 ml-4 mr-8">
          <WithdrawForm />
        </div>
      </div>
    </main>
  );
}

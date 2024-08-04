import { useState } from "react";
import styles from "./Faq.module.css";  

export default function Faq() {
    const [selected, setSelected] = useState(null);
    const toggle = (i) => {
      if (selected === i) {
        setSelected(null);
      } else {
        setSelected(i);
      }
    };
    return (
      <div className={styles.faqBox}>
        <div className={styles.backgroundImage}>
          <div className={styles.heading}>
            <b>Frequently Asked Questions</b>
          </div>
          <div className={styles.accordion}>
            {data.map((item, i) => (
              <div className={styles.item} key={i}>
                <div className={styles.title} onClick={() => toggle(i)}>
                  <h2>{item.question}</h2>
                  <span className={styles.plus}>{selected === i ? "-" : "+"}</span>
                </div>
                <div className={`${styles.content} ${selected === i ? styles.show : ''}`}>

                  <p className={styles.ans}>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  

const data = [
  {
    question: "How do I join a coding contest?",
    answer:
      "To join a coding contest, simply sign up for an account on our platform if you haven't already. Once logged in, navigate to the Contests section, where you'll find a list of ongoing and upcoming contests. Click on the contest you're interested in, and you'll see an option to join. Follow the instructions provided to participate in the contest. Good luck!",
  },
  {
    question: "Can I create and host my own quizzes?",
    answer:
      "Absolutely! Our platform empowers users like you to create and host your own quizzes. After logging in, head to the Quizzes section and click on the option to create a new quiz. Customize the quiz settings, including the title, description, duration, and questions. Once your quiz is ready, you can share it with other users and even set up public or private quiz sessions. Let your creativity shine!",
  },
  {
    question: "Is there a leaderboard where I can track my progress?",
    answer:
      "Yes, we provide a comprehensive leaderboard feature where you can track your progress and compare your performance with other participants. The leaderboard showcases rankings based on various criteria, such as points earned, quiz completion time, and contest standings. You can view the leaderboard for individual quizzes as well as overall contest rankings. Stay motivated and aim for the top!",
  },
  {
    question: "What types of rewards can I expect for participating regularly?",
    answer:
      "We value your active participation on our platform and offer various rewards to recognize your dedication. These rewards may include virtual badges, certificates of achievement, points redeemable for prizes or premium features, and special recognition within our community. Additionally, we occasionally host special events or offer exclusive rewards for our most engaged participants. Keep engaging and reap the rewards of your commitment!",
  },
  {
    question:
      "Are there any forums or communities where I can engage with other users?",
    answer:
      "Yes, we foster a vibrant community where you can engage with like-minded individuals, share insights, and collaborate on coding challenges and quizzes. We offer forums and discussion boards where you can ask questions, seek advice, and connect with other users passionate about coding and quizzing. Join the conversation, expand your network, and enhance your learning experience!",
  },
];
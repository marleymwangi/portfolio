import { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { motion, useAnimation } from "framer-motion";
import withReactContent from 'sweetalert2-react-content';
import { useInView } from "react-intersection-observer";
import { titleVariant, titleChildrenVariant } from '../styles/animations';

const MySwal = withReactContent(Swal);

const formVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: .2,
      staggerChildren: .05,
      when: 'beforeChildren'
    }
  }
}

const formChildrenVariant = {
  hidden: {
    opacity: 0,
    y: 50
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      mass: 0.8,
      damping: 12,
    }
  }
}

export default function Contact() {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    message: '',
  });

  useEffect(() => {
    if (status.info.error) {
      let message = status.info.msg
      MySwal.fire({
        icon: 'error',
        title: 'Oops...',
        text: message,
        footer: '<a href="">Why do I have this issue?</a>'
      })
    }
    if (status.submitted && !status.info.error && status.info.msg) {
      let message = status.info.msg
      MySwal.fire({
        icon: 'success',
        title: 'Submitted',
        text: message,
      })
    }
  }, [status])

  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });
      setInputs({
        name: '',
        email: '',
        message: '',
      });
    } else {
      setStatus({
        info: { error: true, msg: msg },
      });
    }
  };
  const handleOnChange = (e) => {
    e.persist();
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    axios({
      method: 'POST',
      url: 'https://formspree.io/mgerbjzz ',
      data: inputs,
    })
      .then((response) => {
        handleServerResponse(
          true,
          'Thank you, your message has been submitted.',
        );
      })
      .catch((error) => {
        handleServerResponse(false, error.response?.data.error);
      });
  };
  return (
    <main className="contact" id="contact" ref={ref}>
      <motion.div
        variants={titleVariant}
        initial="hidden"
        animate={controls}
      >
        <motion.div className="section-divider" variants={titleChildrenVariant} custom={'l'} />
        <motion.h1 className="section-title" variants={titleChildrenVariant}>Contact me</motion.h1>
      </motion.div>
      <motion.form
        onSubmit={handleOnSubmit}
        variants={formVariant}
        initial="hidden"
        animate={controls}
      >
        <motion.label variants={formChildrenVariant} htmlFor="email">Name</motion.label>
        <motion.input
          id="name"
          type="name"
          name="_replyto"
          onChange={handleOnChange}
          required
          value={inputs.name}
          variants={formChildrenVariant}
        />
        <motion.label variants={formChildrenVariant} htmlFor="email">Email</motion.label>
        <motion.input
          id="email"
          type="email"
          name="_replyto"
          onChange={handleOnChange}
          required
          value={inputs.email}
          variants={formChildrenVariant}
        />
        <motion.label variants={formChildrenVariant} htmlFor="message">Message</motion.label>
        <motion.textarea
          id="message"
          name="message"
          onChange={handleOnChange}
          required
          value={inputs.message}
          variants={formChildrenVariant}
        />
        <motion.button
          type="submit"
          disabled={status.submitting}
          variants={formChildrenVariant}
        >
          {!status.submitting
            ? !status.submitted
              ? 'Submit'
              : 'Submitted'
            : 'Submitting...'}
        </motion.button>
      </motion.form>
    </main>
  );
};
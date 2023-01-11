import React from "react";
import "./testimonials.css";
import client1 from "../../assets/client.jpeg";
const Testimonials = () => {
  const data = [
    {
      id: 1,
      name: "Test client Name",
      avatar: client1,
      review: "Text commonly used to demonstrate the visual form of a ",
    },
    {
      id: 2,
      name: "Test client Name",
      avatar: client1,
      review: "Text commonly used to demonstrate the visual form of a ",
    },
    {
      id: 3,
      name: "Test client Name",
      avatar: client1,
      review: "Text commonly used to demonstrate the visual form of a ",
    },
  ];
  return (
    <section id="testimonial">
      <h2>Testimonial</h2>
      <div className="container testimonial__container">
        {data.map(({ id, name, avatar, review }) => {
          return (
            <article className="testimonial">
              <div className="client_avatar">
                <img src={avatar} alt="Client" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client_review">{review}</small>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Testimonials;

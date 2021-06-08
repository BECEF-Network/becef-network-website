import React from "react";
import "./About.css";
import ReactPlayer from "react-player";

const Aboutus = () => {
  return (
    <div className="about container">
      <div className="row d-flex flex-column">
        <div className="col">
          <div className="title ">
            <h1 className="text-center border-bottom-10 ">
              Let Us introduce ourselves
            </h1>
            {/* <hr className="line" /> */}
          </div>
          <br />
          <div className=" col-sm-2 col-md-9 col-lg-12 ">
            <p className=" ms-4 fs-6 w-10">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam
              laboriosam similique, tenetur est voluptatem explicabo doloremque
              ipsa consectetur exercitationem id impedit! Vitae odio nisi natus
              nihil aut, velit consectetur ex. Repellendus fuga voluptates autem
              nesciunt officiis eius voluptas iure, totam, pariatur beatae amet
              ratione aspernatur nostrum perferendis placeat natus reiciendis
              ea? Excepturi a itaque at nostrum earum laudantium cupiditate
              labore, autem eligendi quas possimus, quibusdam ad hic beatae.
              Nostrum delectus et labore dignissimos sapiente autem, fugit sed
              asperiores perspiciatis rerum accusamus voluptatibus, similique
              distinctio veritatis, sint placeat id magni dolorum animi dicta
              soluta ratione praesentium rem? Adipisci blanditiis suscipit
              molestias tempore in autem, facilis quaerat, earum facere error
              veritatis nisi architecto? Doloremque nostrum quisquam vitae
              aspernatur omnis aliquid eligendi reprehenderit alias, facere
              praesentium eum expedita debitis illo, soluta labore, quae dolore
              neque. Ipsum accusantium odit doloribus saepe, molestiae velit
              provident asperiores fugiat similique. Quas assumenda animi
              doloribus repellat, sapiente minima iusto natus reiciendis
              molestiae ad aliquid quis libero numquam, accusantium ex illum
              voluptatem aspernatur praesentium vitae nobis hic perspiciatis
              tempora
            </p>
          </div>
        </div>
        <div className="player my-5" align="center">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=UVCP4bKy9Iw"
            className="video"
          />
        </div>
      </div>
      <div className="col">
        <p className="ms-4 fs-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam sit ad
          iste asperiores possimus voluptatem tenetur expedita molestias
          provident, illo a nihil at inventore, ut dolorum sequi error corrupti
          incidunt libero dolore modi qui tempora? Porro ducimus, voluptatibus
          quia in, maiores cupiditate excepturi est iure similique impedit,
          neque nisi quos.
        </p>
      </div>
    </div>
  );
};

export default Aboutus;

import React from "react";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <div className="m-5 bg-[#f0ffff]">
      <h1 className="text-center fs-1 m-4">Terms and condition</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
        necessitatibus ex optio sunt iure eum ad facere tempore, nemo maiores,
        nostrum tempora magnam repellendus numquam, doloremque aperiam at eos
        vel corrupti reprehenderit ut odio. Ducimus fuga enim nesciunt
        asperiores voluptates odio ratione deserunt nisi explicabo, iste
        temporibus assumenda vero, nostrum ipsum maxime et optio quis fugiat ut
        praesentium? Harum, ratione, voluptatem ipsam sunt dicta voluptas omnis
        incidunt, voluptate velit laudantium id nisi nesciunt quae quidem quis
        nihil. Aut sequi commodi iusto labore possimus! Vitae similique maxime
        nulla voluptates libero. Maxime amet cupiditate voluptates autem harum
        corporis soluta qui, earum dolorum adipisci deserunt. Placeat laborum ea
        error iure! Iste minima vero atque magni quasi, temporibus expedita odio
        ullam ducimus vitae voluptas, ipsa fugit reprehenderit! Dolor quaerat
        debitis suscipit reprehenderit deserunt sapiente delectus, enim numquam
        dolore molestias eligendi fuga mollitia veniam rem consectetur
        repellendus impedit! Nam minima impedit iure blanditiis delectus,
        laborum eius, eos fugit sequi, perferendis deleniti ad? Cum, velit a
        quam doloribus facilis explicabo nostrum minus quae laudantium cumque
        veniam totam ipsa aliquid, adipisci consequatur fugiat molestiae atque
        recusandae libero. Maxime explicabo vitae repellendus eaque totam
        temporibus expedita rerum similique modi veniam dolor, accusamus natus
        perferendis eius ab. Repudiandae, labore.
      </p>
      <p>
        Please go back to
        <Link to="/register" className="underline text-success fs-4 p-2">
          Register
        </Link>
      </p>
    </div>
  );
};

export default Terms;

import qzone1 from "../../assets/qZone1.png";
import qzone2 from "../../assets/qZone2.png";
import qzone3 from "../../assets/qZone3.png";

const QZone = () => {
  return (
    <div className="bg-secondary my-4">
      <h1 className="text-center py-2 fs-3 text-[#f0ffff]">Q-Zone</h1>
      <div>
        <img src={qzone1} alt="" />
        <img src={qzone2} alt="" />
        <img src={qzone3} alt="" />
      </div>
    </div>
  );
};

export default QZone;

import imageOne from "../assets/year_1_sem_1_chem_est.jpg";
import imageTwo from "../assets/year_1_sem_1_chem_mst.jpg";
import imageThree from "../assets/year_1_sem_2_maths_est.jpg";
import imageFour from "../assets/year_2_sem_3_maths_est.jpg";
import imageFive from "../assets/year_2_sem_4_mechanics_mst.jpg";
import imageSix from "../assets/year_3_sem_5_daa_est.jpg";
import imageSeven from "../assets/year_3_sem_6_cg_mst.jpg";

const papers = [
  {
    id_: 1,
    year: 1,
    sem: 1,
    sub: "chemistry",
    type: "est",
    image: imageOne,
    logo: "fas fa-flask",
  },
  {
    id_: 2,
    year: 1,
    sem: 1,
    sub: "chemistry",
    type: "mst",
    image: imageTwo,
    logo: "fas fa-eye-dropper",
  },
  {
    id_: 3,
    year: 1,
    sem: 2,
    sub: "maths",
    type: "est",
    image: imageThree,
    logo: "fas fa-square-root-alt",
  },
  {
    id_: 4,
    year: 2,
    sem: 3,
    sub: "maths",
    type: "est",
    image: imageFour,
    logo: "fas fa-superscript",
  },
  {
    id_: 5,
    year: 2,
    sem: 4,
    sub: "mechanics",
    type: "mst",
    image: imageFive,
  },
  {
    id_: 6,
    year: 3,
    sem: 5,
    sub: "daa",
    type: "est",
    image: imageSix,
  },
  {
    id_: 7,
    year: 3,
    sem: 6,
    sub: "cg",
    type: "mst",
    image: imageSeven,
  },
];

export default papers;

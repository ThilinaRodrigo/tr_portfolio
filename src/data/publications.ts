import { type Publication } from "../types/publication.type";

export const publications: Publication[] = [
  {
    id: 1,
    title: "A Comparative Study on Deep Transfer Learning Based Rice Leaf Disease Detection",
    conference: "13th Ruhuna International Science & Technology Conference (RISTCON 2026)",
    institution: "Faculty of Science, University of Ruhuna, Matara, Sri Lanka",
    date: "January 21, 2026",
    issn: "ISSN: 1391-8796",
    authors: [
      "Gomes P.M.K.",
      "Supul V.A.",
      "Shenal W.A.",
      "Rodrigo U.L.T.",
      "Pathirana K.P.U.L.",
      "Vidanagamachchi C.S.",
      "Chathurangi K.A.A."
    ],
    description:
      "Evaluates Machine Learning (ML) and Deep Transfer Learning (DL) models (Custom CNN, VGG16, VGG19, CNN+SVM) on 3,000+ dataset images for automated classification of Sri Lankan rice leaf diseases (bacterial leaf blight, brown spot, leaf scald, narrow brown spot). VGG19 achieved state-of-the-art performance with 99.44% training accuracy and 98.86% testing accuracy.",
    tags: [
      "Rice Leaf Disease",
      "Deep Learning",
      "Convolutional Neural Network",
      "Transfer Learning (VGG19)",
      "Sri Lankan Agriculture"
    ],
    publicationUrl: "https://www.sci.ruh.ac.lk/conference/ristcon2026/RISTCON%202026%20Proceedings%20draft_1.pdf",
    pdfUrl: "https://www.sci.ruh.ac.lk/conference/ristcon2026/RISTCON%202026%20Proceedings%20draft_1.pdf",
    relatedProjectId: 4 // Connects to Rice Leaf AI Ecosystem
  }
];

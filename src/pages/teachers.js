import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

// const teachers = [
//   { name: "Adreanna Limbach", url: "adreannalimbach.com
// "},
//   { name: "Aiko Michot
// ", url: "rememberingtruenature.com
// "},
//   { name: "Alejandra Siroka
// ", url: "languagealchemy.com
// "},
//   { name: "Amanda Gilbert
// ", url: "amandagilbertmeditation.com
// "},
//   { name: "Amanda Ream
// ", url: ""},
//   { name: "Amma Thanasanti
// ", url: "awakeningtruth.org
// "},
//   { name: "Anand Vaidya
// ", url: ""},
//   { name: "Andrea Vecchione
// ", url: "yy"},
//   { name: "Andrew Chaiken
// ", url: "heart.camp
// "},
//   { name: "Anil Thapa
// ", url: "yy"},
//   { name: "Ann Uyeda
// ", url: "yy"},
//   { name: "Arinna Weisman
// ", url: "yy"},
//   { name: "Ayya Anandabodhi
// ", url: "alokavihara.org
// "},
//   { name: "Ayya Santacitta
// ", url: "alokavihara.org
// "},
//   { name: "Baruch Golden
// ", url: "yy"},
//   { name: "Cari Jacobs
// ", url: "yy"},
// { name: "Caverly Morgan", url: "yy"},
// { name: "Chandra Easton
// ", url: "shunyatayoga.com
// "},
// { name: "Cheryl Slean
// ", url: "CherylSleanMeditation.org
// "},
// { name: "xx", url: "yy"},
// { name: "xx", url: "yy"},
// { name: "xx", url: "yy"},
// { name: "xx", url: "yy"},
// { name: "xx", url: "yy"},
// { name: "xx", url: "yy"},
// { name: "xx", url: "yy"},
// { name: "xx", url: "yy"},
// { name: "xx", url: "yy"},
// { name: "xx", url: "yy"},
// { name: "xx", url: "yy"},
// { name: "xx", url: "yy"},
// { name: "xx", url: "yy"},
// { name: "xx", url: "yy"},
// { name: "xx", url: "yy"},
// { name: "xx", url: "yy"},
// { name: "xx", url: "yy"},
// { name: "xx", url: "yy"},
// { name: "xx", url: "yy"},
// { name: "xx", url: "yy"},
// { name: "xx", url: "yy"},
// { name: "xx", url: "yy"},
// { name: "xx", url: "yy"},
// { name: "xx", url: "yy"},
// { name: "xx", url: "yy"},
// { name: "xx", url: "yy"},
// { name: "xx", url: "yy"},
// { name: "xx", url: "yy"},
// { name: "xx", url: "yy"},
// { name: "xx", url: "yy"},
// { name: "xx", url: "yy"},
// { name: "xx", url: "yy"},
// { name: "xx", url: "yy"},
// { name: "xx", url: "yy"},
// { name: "xx", url: "yy"},
// { name: "xx", url: "yy"},
// { name: "xx", url: "yy"},
// { name: "xx", url: "yy"},
// { name: "xx", url: "yy"},
// { name: "xx", url: "yy"},
// { name: "xx", url: "yy"},
// { name: "xx", url: "yy"},
// { name: "xx", url: "yy"},
// { name: "xx", url: "yy"},
// { name: "xx", url: "yy"},
// { name: "xx", url: "yy"},
// { name: "xx", url: "yy"},
// { name: "xx", url: "yy"},
// { name: "xx", url: "yy"},
// { name: "xx", url: "yy"},
// { name: "xx", url: "yy"},
// { name: "xx", url: "yy"},
// { name: "xx", url: "yy"},
// { name: "xx", url: "yy"},
// { name: "xx", url: "yy"},
// { name: "xx", url: "yy"},
// { name: "xx", url: "yy"},
// { name: "xx", url: "yy"},
// { name: "xx", url: "yy"},
// ];
//
//
// Cheryl Slean
// CherylSleanMeditation.org
// Chris "Doc" Kelley
// Christian Howard
// Rev. Daigan Gaither
// Dan Petrie
// silencebetween.com
//
// Daniel Ingram
// Dharma Overground
// Dave Smith
// davesmithdharma.com
// David McKay
// TheOneOpenDoor
// Deborah Eden Tull
// deborahedentull.com
// Devin Berry
// www.spiritrock.org/devin-berry
// Devon Cresci
// facebook.com/devoncresci
// Erik Davis
// psychedelicsangha.org
// Eve Ekman
// eveekman.com
// Eugene Cash
// sfinsight.org
// Fresh! “Lev” White
// affirmativeacts.org
// Gary Gach
// levity.com/interbeing/
// Gene Lushtak
// Geoff Ashton
// George Haas
// mettagroup.org/about
// Howie Cohn
// MissionDharma
// Isa Gucciardi
//  sacredstream.org
// JD Doyle
// Jeffrey Mooney
// Jennifer Dumpert
// liminaldreaming.com
// Jessica Graham
// yourwildawakening.com
// Jordanna Eve
// www.intouchsf.com
// Juliana Sloane
// julianasloane.com
// Karin Brown
// Kat Roubos
// alivelykat.com
// Kelly Yi
// eastbaymindfulcenter.org
// Kevin Griffin
// www.kevingriffin.net
//
// Khedrup Rinpoche Ugyen Tenzin Thinley Lhendup
// khedrup.org
// Kitty Costello
// Krisztina Lazar
// transcendentbird.com
// Konda Mason
// Liz Fitzgerald
// Leigh Brasington
// leighb.com
// Lobsang Tenpa
// lobsangtenpa.com
// Mary Stancavage
// Melanie DeMore
// Michael Crowley
// Michael Owens
// soundcloud.com/lotus-underground
// Michael Taft
// deconstructingyourself.com
// Mimi Moncier
// gigglinglotus.com
// Nils Heymann
// Pawan Bareja
// spiritrock.org/pawan-bareja
// Ralph de la Rosa
// René Rivera
// Robin Gayle
// Ryan Redman
// Shinzen Young
// www.shinzen.org
// Scott Tusa
// scotttusa.com
// Spiros Antonopoulos
// Syra Smith
// T (Anthony) Maes
// Tara Mulay
// Teague O'Malley
// Tina Rasmussen
// AwakeningDharma.com
// Todd Jordan
// Toran "Beja" Ailisheva
// White Noise Collective
// Tucker Peck
// Venerable Dhammadipa
// alokavihara.org
// Vincent Horn
// vincenthorn.com
// Vickie Chang, PhD
// www.vickiechangphd.com
// Vy Le
// inwavegroup.com

const Teachers = () => {
  return (
    <Layout>
      <SEO
        title="Teachers"
        description="San Francisco Dharma Collective Teachers Page"
      />
      <Grid container>
        <Grid item xs={12}>
          <Typography align="center" variant="h2">
            Coming soon...
          </Typography>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Teachers;

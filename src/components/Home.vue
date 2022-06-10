<template>
    <div class="projects">
        <div class="proj">
            <h2>Modeling epidemic containment strategies on social networks</h2>
            <figure>
                <img src="../assets/graph_nodes.png" alt="Epidemic on a network">
                <figcaption>Example social network for an epidemic</figcaption>
            </figure>
            During epidemics, governments enact a variety of non-pharmaceutical interventions to curb the spread of disease. Social distancing, isolation, and quarantine reduce transmission but also burden the economy, education, and health. Through modeling, we investigated mitigation strategies that keep interactions as close to normal as possible. We translated the Susceptible-Infected-Recovered (SIR) ODE model for epidemics to networks. Various mitigation measures are implemented by breaking specific links at a specified time. We compared the effects mitigation measures have on these graphs, and we found that targeted link removal is more effective than random removal, but both can be ineffective if implemented too late from the first infection. These preliminary results show the promise of network-based models as a tool to model nonpharmaceutical interventions. This work was done with the guidance of Dr. Martin Short at Georgia Tech, and presented as a poster in the 2022 UROP Symposium.
            <br><br>
            Final <a href="https://drive.google.com/file/d/1oSly6Lg3RhSBMjTGoLO678QO1zYS-G80/view?usp=sharing">Poster</a> and
            <a href="https://drive.google.com/file/d/1GEa6RPfQgrnvD72pTbefLGYpOEvSMK-h/view?usp=sharing">Report</a> from this project

        </div>
        <br><br>
        <div class="proj">
            <h2>The Wikipedia Game as a measure of crystallized intelligence</h2>
            <figure>
                <img src="../assets/wikipedia_graph.png" alt="Six degrees of wikipedia">
                <figcaption>Image credits: <a href="https://www.sixdegreesofwikipedia.com/">Six Degrees of Wikipedia</a></figcaption>
            </figure>
            In The Wikipedia Game, participants use Wikipedia hyperlinks to navigate from an origin page to a destination page. For example, if the origin page is “Georgia Tech” and the destination page is “George Washington,” players would be given the “Georgia Tech” Wikipedia page, and they might click “Atlantic Coast Conference” -> “South Atlantic states” -> “United States” -> “George Washington.” Or, as in the image, if given "Georgia Tech," participants could reach "Python (programming language)" via "Udacity." The test has the potential to capture a larger array of human knowledge than extant measures of crystallized intelligence as well as the ability to generate novel items without compromising test integrity. This work was conducted in the Problem Solving and Educational Technology Lab. Research on the topic was presented at the UROP Symposium in 2021 at Georgia Tech.
        </div>
        <br><br>
        <div class="proj">
            <h2>Multi-hypothesis tracking of space objects and targets</h2>
            <figure>
                <img src="../assets/mht.jpg" alt="Six degrees of wikipedia">
                <figcaption>Tracking two objects traveling in parallel</figcaption>
            </figure>
            Over 20,000 artificial satellites currently orbit the Earth, and thousands more are launched each year. As the sky becomes more cluttered, tracking the trajectories of objects in Earth's orbit is critical. Sensors such as radar are currently used to measure satellite locations; however, these measurements are inherently noisy. Dealing with this noise is especially challenging when tracking many objects in close proximity. Multi-Hypothesis Tracking (MHT) is a prevalent tracking algorithm for monitoring multiple objects based on a deferred decision-making approach. We empirically tested a tree-based, track-oriented version of the MHT algorithm in difficult object tracking scenarios and develop improvements to overcome current shortcomings. These include a novel track scoring criteria based on the chi-squared test for variance. In addition, we developed heuristics for gating, thresholds for adding new tracks or incorporating missed measurements, and a modification to the traditional MHT algorithm that prevents new objects from being detected from false alarms prematurely. This research was conducted at the Institute for Pure and Applied Math (IPAM) at UCLA, as part of the Research in Industrial Projects (RIPS) program.
        </div>

    </div>
</template>

<script>
    export default {
        name: "Projects"
    }
</script>

<style scoped>
    .proj figure {
        float: right;
        margin-left: 5%;

    }
    .proj img {
        width: 350px;
    }
</style>

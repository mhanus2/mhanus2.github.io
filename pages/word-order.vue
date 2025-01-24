<template>
    <h1 class="text-center">Word Order</h1>
    <v-container>
        <v-card>
            <v-card-title>
                <h3 class="text-center">Positive Sentences</h3>
            </v-card-title>
            <v-table>
                <thead>
                    <tr>
                        <th scope="col">Tense</th>
                        <th scope="col">Subject</th>
                        <th scope="col">Auxiliary verb</th>
                        <th scope="col">Second auxiliary verb</th>
                        <th scope="col">Third auxiliary verb</th>
                        <th scope="col">Main verb</th>
                        <th scope="col">Object</th>
                        <th scope="col">Reference to time</th>
                    </tr>
                    <tr>
                        <th></th>
                        <th>1</th>
                        <th>2</th>
                        <th>3</th>
                        <th>4</th>
                        <th>5</th>
                        <th>6</th>
                        <th>7</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="simple-tenses">
                        <td class="tense-label" rowspan="3">SIMPLE TENSES</td>
                        <td>I</td>
                        <td>Not applicable</td>
                        <td></td>
                        <td></td>
                        <td>drink</td>
                        <td>tea</td>
                        <td>every day</td>
                    </tr>
                    <tr class="simple-tenses">
                        <td>I</td>
                        <td>Not applicable</td>
                        <td></td>
                        <td></td>
                        <td>drank</td>
                        <td>a cup of tea</td>
                        <td>yesterday</td>
                    </tr>
                    <tr class="simple-tenses">
                        <td>I</td>
                        <td>will</td>
                        <td></td>
                        <td></td>
                        <td>drink</td>
                        <td>a cup of tea</td>
                        <td>tomorrow morning</td>
                    </tr>
                    <tr class="continuous-tenses">
                        <td class="tense-label" rowspan="3">IN THE MIDDLE OF DOING (CONT.) TENSES</td>
                        <td>I</td>
                        <td>am</td>
                        <td></td>
                        <td></td>
                        <td>drinking</td>
                        <td>tea</td>
                        <td>(right now)</td>
                    </tr>
                    <tr class="continuous-tenses">
                        <td>I</td>
                        <td>was</td>
                        <td></td>
                        <td></td>
                        <td>drinking</td>
                        <td>tea</td>
                        <td>when you came home</td>
                    </tr>
                    <tr class="continuous-tenses">
                        <td>I</td>
                        <td>will</td>
                        <td>be</td>
                        <td></td>
                        <td>drinking</td>
                        <td>tea</td>
                        <td>when you come home</td>
                    </tr>
                    <tr class="perfect-tenses">
                        <td class="tense-label" rowspan="3">PERFECT TENSES</td>
                        <td>I</td>
                        <td>have</td>
                        <td></td>
                        <td></td>
                        <td>drunk</td>
                        <td>3 cups of tea</td>
                        <td>today</td>
                    </tr>
                    <tr class="perfect-tenses">
                        <td>I</td>
                        <td>had</td>
                        <td></td>
                        <td></td>
                        <td>drunk</td>
                        <td>4 cups of tea</td>
                        <td>when you got home yesterday</td>
                    </tr>
                    <tr class="perfect-tenses">
                        <td>I</td>
                        <td>will</td>
                        <td>have</td>
                        <td></td>
                        <td>drunk</td>
                        <td>my cup of tea</td>
                        <td>by the time you finish doing that</td>
                    </tr>
                    <tr class="perfect-continuous-tenses">
                        <td class="tense-label" rowspan="3">PERFECT CONTINUOUS TENSES</td>
                        <td>I</td>
                        <td>have</td>
                        <td>been</td>
                        <td></td>
                        <td>drinking</td>
                        <td>tea</td>
                        <td>all day</td>
                    </tr>
                    <tr class="perfect-continuous-tenses">
                        <td>I</td>
                        <td>had</td>
                        <td>been</td>
                        <td></td>
                        <td>drinking</td>
                        <td>coffee</td>
                        <td>for 20 years when I gave it up</td>
                    </tr>
                    <tr class="perfect-continuous-tenses">
                        <td>I</td>
                        <td>will</td>
                        <td>have</td>
                        <td>been</td>
                        <td>drinking</td>
                        <td>tea</td>
                        <td>for exactly 20 years by the 1st of April</td>
                    </tr>
                </tbody>
            </v-table>
        </v-card>
    </v-container>
    <v-container>
        <v-card>
            <v-card-title>
                <h3 class="text-center">Negative Sentences</h3>
            </v-card-title>
            <v-table>
                <thead>
                    <tr>
                        <th scope="col">Tense</th>
                        <th scope="col">Subject</th>
                        <th scope="col">Auxiliary verb</th>
                        <th scope="col">Second auxiliary verb</th>
                        <th scope="col">Third auxiliary verb</th>
                        <th scope="col">Main verb</th>
                        <th scope="col">Object</th>
                        <th scope="col">Reference to time</th>
                    </tr>
                    <tr>
                        <th></th>
                        <th>1</th>
                        <th>2</th>
                        <th>3</th>
                        <th>4</th>
                        <th>5</th>
                        <th>6</th>
                        <th>7</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="simple-tenses">
                        <td class="tense-label" rowspan="3">SIMPLE TENSES</td>
                        <td>I</td>
                        <td>don't</td>
                        <td></td>
                        <td></td>
                        <td>drink</td>
                        <td>tea</td>
                        <td>in the evenings</td>
                    </tr>
                    <tr class="simple-tenses">
                        <td>I</td>
                        <td>didn't</td>
                        <td></td>
                        <td></td>
                        <td>drink</td>
                        <td>a cup of tea</td>
                        <td>on Saturday</td>
                    </tr>
                    <tr class="simple-tenses">
                        <td>I</td>
                        <td>will not</td>
                        <td></td>
                        <td></td>
                        <td>drink</td>
                        <td>a cup of tea</td>
                        <td>tonight</td>
                    </tr>
                    <tr class="continuous-tenses">
                        <td class="tense-label" rowspan="3">IN THE MIDDLE OF DOING (CONT.) TENSES</td>
                        <td>I</td>
                        <td>am not</td>
                        <td></td>
                        <td></td>
                        <td>drinking</td>
                        <td>coffee</td>
                        <td>(right now)</td>
                    </tr>
                    <tr class="continuous-tenses">
                        <td>I</td>
                        <td>wasn't</td>
                        <td></td>
                        <td></td>
                        <td>drinking</td>
                        <td>coffee</td>
                        <td>when you came home</td>
                    </tr>
                    <tr class="continuous-tenses">
                        <td>I</td>
                        <td>won't</td>
                        <td>be</td>
                        <td></td>
                        <td>drinking</td>
                        <td>tea</td>
                        <td>when you come home</td>
                    </tr>
                    <tr class="perfect-tenses">
                        <td class="tense-label" rowspan="3">PERFECT TENSES</td>
                        <td>I</td>
                        <td>haven't</td>
                        <td></td>
                        <td></td>
                        <td>drunk</td>
                        <td>any tea</td>
                        <td>this week</td>
                    </tr>
                    <tr class="perfect-tenses">
                        <td>I</td>
                        <td>hadn't</td>
                        <td></td>
                        <td></td>
                        <td>drunk</td>
                        <td>4 cups of coffee</td>
                        <td>when you got home yesterday</td>
                    </tr>
                    <tr class="perfect-tenses">
                        <td>I</td>
                        <td>will not</td>
                        <td>have</td>
                        <td></td>
                        <td>drunk</td>
                        <td>my cup of tea</td>
                        <td>by the time you finish doing that</td>
                    </tr>
                    <tr class="perfect-continuous-tenses">
                        <td class="tense-label" rowspan="3">PERFECT CONTINUOUS TENSES</td>
                        <td>I</td>
                        <td>haven't</td>
                        <td>been</td>
                        <td></td>
                        <td>drinking</td>
                        <td>your tea!</td>
                        <td>(recently)</td>
                    </tr>
                    <tr class="perfect-continuous-tenses">
                        <td>I</td>
                        <td>hadn't</td>
                        <td>been</td>
                        <td></td>
                        <td>drinking</td>
                        <td>coffee</td>
                        <td>for long when I gave it up</td>
                    </tr>
                    <tr class="perfect-continuous-tenses">
                        <td>I</td>
                        <td>will not</td>
                        <td>have</td>
                        <td>been</td>
                        <td>drinking</td>
                        <td>tea</td>
                        <td>long when that new brand comes out</td>
                    </tr>
                </tbody>
            </v-table>
        </v-card>
    </v-container>
    <v-container>
        <v-card>
            <v-card-title>
                <h3 class="text-center">Closed Questions</h3>
            </v-card-title>
            <v-table>
                <thead>
                    <tr>
                        <th scope="col">Tense</th>
                        <th scope="col">Auxiliary verb</th>
                        <th scope="col">Subject</th>
                        <th scope="col">Second auxiliary verb</th>
                        <th scope="col">Third auxiliary verb</th>
                        <th scope="col">Main verb</th>
                        <th scope="col">Object</th>
                        <th scope="col">Reference to time</th>
                    </tr>
                    <tr>
                        <th></th>
                        <th>1</th>
                        <th>2</th>
                        <th>3</th>
                        <th>4</th>
                        <th>5</th>
                        <th>6</th>
                        <th>7</th>
                    </tr>
                </thead>

                <tbody>
                    <tr class="simple-tenses">
                        <td class="tense-label" rowspan="3">SIMPLE TENSES</td>
                        <td>Do</td>
                        <td>you</td>
                        <td></td>
                        <td></td>
                        <td>drink</td>
                        <td>tea</td>
                        <td>in the mornings?</td>
                    </tr>
                    <tr class="simple-tenses">
                        <td>Did</td>
                        <td>you</td>
                        <td></td>
                        <td></td>
                        <td>drink</td>
                        <td>a cup of tea</td>
                        <td>last night?</td>
                    </tr>
                    <tr class="simple-tenses">
                        <td>Will</td>
                        <td>you</td>
                        <td></td>
                        <td></td>
                        <td>drink</td>
                        <td>a cup of tea</td>
                        <td>this afternoon?</td>
                    </tr>
                    <tr class="continuous-tenses">
                        <td class="tense-label" rowspan="3">IN THE MIDDLE OF DOING (CONT.) TENSES</td>
                        <td>Are</td>
                        <td>you</td>
                        <td></td>
                        <td></td>
                        <td>drinking</td>
                        <td>tea?</td>
                        <td>(right now)</td>
                    </tr>
                    <tr class="continuous-tenses">
                        <td>Were</td>
                        <td>you</td>
                        <td></td>
                        <td></td>
                        <td>drinking</td>
                        <td>tea</td>
                        <td>when I came home?</td>
                    </tr>
                    <tr class="continuous-tenses">
                        <td>Will</td>
                        <td>you</td>
                        <td>be</td>
                        <td></td>
                        <td>drinking</td>
                        <td>tea</td>
                        <td>when I get home?</td>
                    </tr>
                    <tr class="perfect-tenses">
                        <td class="tense-label" rowspan="3">PERFECT TENSES</td>
                        <td>Have</td>
                        <td>you</td>
                        <td></td>
                        <td></td>
                        <td>drunk</td>
                        <td>my cup of tea?</td>
                        <td>(recently)</td>
                    </tr>
                    <tr class="perfect-tenses">
                        <td>Had</td>
                        <td>you</td>
                        <td></td>
                        <td></td>
                        <td>drunk</td>
                        <td>any tea</td>
                        <td>when I got home yesterday?</td>
                    </tr>
                    <tr class="perfect-tenses">
                        <td>Will</td>
                        <td>you</td>
                        <td>have</td>
                        <td></td>
                        <td>drunk</td>
                        <td>your cup of tea</td>
                        <td>by the time I finish?</td>
                    </tr>
                    <tr class="perfect-continuous-tenses">
                        <td class="tense-label" rowspan="3">PERFECT CONTINUOUS TENSES</td>
                        <td>Have</td>
                        <td>you</td>
                        <td>been</td>
                        <td></td>
                        <td>drinking</td>
                        <td>my tea?</td>
                        <td>(recently)</td>
                    </tr>
                    <tr class="perfect-continuous-tenses">
                        <td>Had</td>
                        <td>you</td>
                        <td>been</td>
                        <td></td>
                        <td>drinking</td>
                        <td>coffee</td>
                        <td>long when you gave it up?</td>
                    </tr>
                    <tr class="perfect-continuous-tenses">
                        <td>Will</td>
                        <td>you</td>
                        <td>have</td>
                        <td>been</td>
                        <td>drinking</td>
                        <td>tea</td>
                        <td>long when I get home from work?</td>
                    </tr>
                </tbody>
            </v-table>
        </v-card>
    </v-container>
    <v-container>
        <v-card>
            <v-card-title>
                <h3 class="text-center">Open WH Questions</h3>
            </v-card-title>
            <v-table>
                <thead>
                    <tr>
                        <th scope="col">Tense</th>
                        <th scope="col"></th>
                        <th scope="col">Auxiliary verb</th>
                        <th scope="col">Subject</th>
                        <th scope="col">Second auxiliary verb</th>
                        <th scope="col">Third auxiliary verb</th>
                        <th scope="col">Main verb</th>
                        <th scope="col">Object</th>
                        <th scope="col">Reference to time</th>
                    </tr>
                    <tr>
                        <th></th>
                        <th>0</th>
                        <th>1</th>
                        <th>2</th>
                        <th>3</th>
                        <th>4</th>
                        <th>5</th>
                        <th>6</th>
                        <th>7</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="simple-tenses">
                        <td class="tense-label" rowspan="3">SIMPLE TENSES</td>
                        <td>What</td>
                        <td>do</td>
                        <td>you</td>
                        <td></td>
                        <td></td>
                        <td>drink</td>
                        <td></td>
                        <td>in the mornings?</td>
                    </tr>
                    <tr class="simple-tenses">
                        <td>Why</td>
                        <td>did</td>
                        <td>you</td>
                        <td></td>
                        <td></td>
                        <td>drink</td>
                        <td>a cup of tea</td>
                        <td>last night?</td>
                    </tr>
                    <tr class="simple-tenses">
                        <td>Where</td>
                        <td>will</td>
                        <td>you</td>
                        <td></td>
                        <td></td>
                        <td>drink</td>
                        <td>3 cups of tea</td>
                        <td>tonight?</td>
                    </tr>
                    <tr class="continuous-tenses">
                        <td class="tense-label" rowspan="3">IN THE MIDDLE OF DOING (CONT.) TENSES</td>
                        <td>Why</td>
                        <td>are</td>
                        <td>you</td>
                        <td></td>
                        <td></td>
                        <td>drinking</td>
                        <td>tea?</td>
                        <td>(right now)</td>
                    </tr>
                    <tr class="continuous-tenses">
                        <td>What</td>
                        <td>were</td>
                        <td>you</td>
                        <td></td>
                        <td></td>
                        <td>drinking</td>
                        <td>tea</td><!--todo - weird-->
                        <td>when I came home?</td>
                    </tr>
                    <tr class="continuous-tenses">
                        <td>Why</td>
                        <td>won't</td>
                        <td>you</td>
                        <td>be</td>
                        <td></td>
                        <td>drinking</td>
                        <td>tea</td>
                        <td>when I get home?</td>
                    </tr>
                    <tr class="perfect-tenses">
                        <td class="tense-label" rowspan="3">PERFECT TENSES</td>
                        <td>Whose tea</td>
                        <td>have</td>
                        <td>you</td>
                        <td></td>
                        <td></td>
                        <td>drunk?</td>
                        <td>Object moves to position 0</td>
                        <td>(recently)</td>
                    </tr>
                    <tr class="perfect-tenses">
                        <td>How many cups of tea</td>
                        <td>had</td>
                        <td>you</td>
                        <td></td>
                        <td></td>
                        <td>drunk</td>
                        <td>Object moves to position 0</td>
                        <td>when I got home last night?</td>
                    </tr>
                    <tr class="perfect-tenses">
                        <td>How many cups of tea</td>
                        <td>will</td>
                        <td>you</td>
                        <td>have</td>
                        <td></td>
                        <td>drunk</td>
                        <td>Object moves to position 0</td>
                        <td>by the time I get home from work?</td>
                    </tr>
                    <tr class="perfect-continuous-tenses">
                        <td class="tense-label" rowspan="3">PERFECT CONTINUOUS TENSES</td>
                        <td>Who</td>
                        <td>has</td>
                        <td></td>
                        <td>been</td>
                        <td></td>
                        <td>drinking</td>
                        <td>my tea?</td>
                        <td>(recently)</td>
                    </tr>
                    <tr class="perfect-continuous-tenses">
                        <td>How long</td>
                        <td>had</td>
                        <td>you</td>
                        <td>been</td>
                        <td></td>
                        <td>drinking</td>
                        <td>coffee</td>
                        <td>when you gave it up?</td>
                    </tr>
                    <tr class="perfect-continuous-tenses">
                        <td>How long</td>
                        <td>will</td>
                        <td>you</td>
                        <td>have</td>
                        <td>been</td>
                        <td>drinking</td>
                        <td>tea</td>
                        <td>at the tea shop when it closes next month?</td>
                    </tr>
                </tbody>
            </v-table>
        </v-card>
    </v-container>
</template>
// MYSTERIOUS ORGANISM
// This program models objects that simulates the
// DNA of the fictitious organism Pila aequor.

// Returns a random DNA base (A, T, C, G)
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G'];
    return dnaBases[Math.floor(Math.random() * 4)] ;
};
  
// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
    const newStrand = [];
    for (let i = 0; i < 15; i++) {
        newStrand.push(returnRandBase())
    };
    return newStrand;
};
  
//Returns an instance of the organism Pila aequor
const pAequorFactory = (specimenNum, dna) => {
    return {
        specimenNum,
        dna,

    //Replaces a random base in the organism's DNA strand with another random base
        mutate() {
        let randomNum = Math.floor(Math.random() * dna.length);
        let randomBase = returnRandBase();
        while (randomBase === this.dna[randomNum]) {
            randomBase = returnRandBase();
        };
        this.dna[randomNum] = randomBase;
        return this.dna;
        },

    //Compares the organism's DNA with another organism's DNA and returns the percentage of similarity
        compareDNA(pAequor) {
        let dnaCounter = 0;
        for (let i = 0; i < (this.dna).length; i++) {
            if (this.dna[i] === pAequor.dna[i]) {
            dnaCounter += 1;
            };
        };
        let percentage = ((dnaCounter / 15) * 100).toFixed(2);
        console.log(`Specimen #${this.specimenNum} and specimen #${pAequor.specimenNum} have ${percentage}% DNA in common.`)
        },

    //Returns true if organism's DNA strand is more than 60% C and/or G
        willLikelySurvive() {
        let baseCounter = 0;
        for (let i = 0; i < 15; i++) {
            if (this.dna[i] === 'C' || this.dna[i] === 'G') {
            baseCounter += 1;
            };
        };
        let percentage = ((baseCounter / 15) * 100).toFixed(2);
        //console.log('% of C or G bases: ' + percentage);
        return (percentage >= 60);
        },

    //Returns the complement of the organism's DNA strand, switching A<->T and C<->G
        complementStrand() {
            let complementStrand = [];
            for (let i = 0; i < 15; i++) {
                if (this.dna[i] === 'A') {
                complementStrand.push('T');
                } else if (this.dna[i] === 'T') {
                complementStrand.push('A');
                } else if (this.dna[i] === 'C') {
                complementStrand.push('G');
                } else if (this.dna[i] === 'G') {
                complementStrand.push('C');
                };
            };
            return complementStrand;      
        }
    };
};
    
    
let survivors = [];
let specimenCounter = 1;

//Generates an array filled with 30 organisms likely to survive
while (survivors.length < 30) {
    let tempOrganism = pAequorFactory(specimenCounter, mockUpStrand())
    if (tempOrganism.willLikelySurvive()) {
        survivors.push(tempOrganism);
        specimenCounter += 1;
    };
};



let testObj1 = pAequorFactory(1, mockUpStrand());
let testObj2 = pAequorFactory(2, mockUpStrand());

console.log(testObj1.dna.join(''));
console.log(testObj1.complementStrand().join(''));

/*
console.log(testObj1.dna.join(''));
console.log(testObj2.dna.join(''));
testObj1.compareDNA(testObj2);

console.log(testObj1.willLikelySurvive());
console.log(testObj2.willLikelySurvive());
*/
  
  
  
  
  
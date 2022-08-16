# MERN-It-Is-Time-to-Duel

## Dojo CCG

In this assignment you will design a Collectible Card Game in the style of Hearthstone, Yu-Gi-Oh!, or Magic: The Gathering. If you aren't familiar with these sorts of games, don't worry we will be explaining what you need to know about them.

![image](https://user-images.githubusercontent.com/93773622/184944542-88af36e7-5de1-4c8c-b992-9472a6542994.png)

In this game there will be two different types of Cards: Units and Effects. Units will be played to gain control of the board and will battle with units played by an opponent. Effects require a Unit to be targeted in order to be played. 

![image](https://user-images.githubusercontent.com/93773622/184944708-ac64b64f-69d7-4172-8cba-960f8f3c4679.png)

Effects will require a "target" when they are played. They increase or decrease either the power or the resilience of the "Unit" that they target. Similarly "Units" can attack other "Units", when they do they decrease the target's "resilience" by the attacker's "power". 

![image](https://user-images.githubusercontent.com/93773622/184944802-42fd43c0-ea8f-41ce-8fc5-5b7d53678c2b.png)

If we want to ensure that the target of a Unit's attack or an Effect is being played on a Unit, we can make use of `instanceof` to check that target is a "Unit". If it isn't we might want to throw an error to alert the user or programmer that the action won't be able to proceed.

```
play( target ) {
    if( target instanceof Unit ) {
        // implement card text here
    } else {
        throw new Error( "Target must be a unit!" );
    }
}
```

## It's Time to Duel

### Unit Cards

![Screen Shot 2022-08-16 at 8 59 43 PM](https://user-images.githubusercontent.com/93773622/184947615-69589e5c-ce7e-493a-b8d3-7aa0b5885606.png)

![Screen Shot 2022-08-16 at 8 59 49 PM](https://user-images.githubusercontent.com/93773622/184947653-38a97f53-e38c-4214-ba25-2aac6ff1bac4.png)

![Screen Shot 2022-08-16 at 8 59 58 PM](https://user-images.githubusercontent.com/93773622/184947687-7131fc06-8808-49fa-bf22-1d93fa974906.png)

[-] Make an instance of Unit called "Red Belt Ninja"

[-] Make an instance of Unit called "Black Belt Ninja"

[-] Make an instance of Effect called "Hard Algorithm"

[-] Make an instance of Effect called "Unhandled Promise Rejection"

[-] Make an instance of Effect called "Pair Programming"

[-] Play out the scenario described above


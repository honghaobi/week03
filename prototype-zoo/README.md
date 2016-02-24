# prototype-zoo

During this exercise, you'll apply your knowledge of object-oriented programming (OOP) and prototypal inheritance. 

Your goal is to create a zoo and add animals to it. Yes, you read that correctly--you're creating a zoo! You're going to one-up Matt Damon, whom just bought a zoo:

![We Bought a Zoo](./images/we-bought-a-zoo.jpg)

# Instructions
To make your zoo successful, you'll need to follow these five steps: 

### 1 of 5: Fork and Clone
Fork and clone this repository to here: 

```javascript
~/workspace
```

If `workspace` doesn't exist, create it: 


```javascript
mkdir ~/workspace
``` 

### 2 of 5: Download npm Packages
This repository contains external libraries, which will enables us to include a test suite. You'll need to navigate to your cloned repository and type the following command:

  ```javascript
  npm install
  ```

### 3 of 5: Run Tests
After all packages have been downloaded, type the following command to run your tests:

```javascript
npm test
```

## Step 4 of 5: Make Tests Pass
To make the tests pass, you'll need to write the code for the following two constructors:

- `Animal`
- `Zoo`

You'll find a file for each constructor in `javascript/animal.js` and `javascript/animal.js`.

### `Animal`
An instance of this constructor should have the following properties and methods:

#### properties
- `kind`: has a string as a value--e.g., lion"
- `sound`: has a string as a value--e.g., "roar"
- `name`: has a string as a value
- `age`: has an integer as a value
- `awake`: has a `Boolean` value, and the default is `false`

#### methods
- `wakeUp()`: changes `awake` to `true`
- `speak()`: has a string as a value (e.g., a pig would return "oink!")
- `feed()`: if the animal is awake, return's the string `"NOM NOM NOM"`
- `growUp()`: adds one year to animal's `age`
- `sleep()`: changes `awake` to `false`

### `Zoo`
An instance of this constructor should have the following properties and methods:

#### properties
- `location`: has a string as a value
- `name`: has a string as a value
- `status`: has a string as a value, default is `"closed"`
- `animals`: has an array as a value

#### methods
- `isOpen()`: returns a `Boolean` value.
- `open()`: updates value of `status` to `"open"`
- `addAnimal()`: ONLY if the zoo is open and the kind of animal is not already in the zoo, adds an animal to `animals`. 
- `removeAnimal()`: ONLY if the zoo is open, removes an animal from `animals`. 
- `changeLocation()`: updates value of `location`
- `close()`: updates value of `status` to `"closed"`

# Step 5 of 5: Submission
When you're done, push your work to your forked repository. Then copy the URL of your forked repository and paste it into the LMS (learning management system).

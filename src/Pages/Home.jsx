import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Footer from "../Components/Footer";
import IntroCard from "../Components/IntroCard";
import EcoCard from "../Components/EcoCard";
import plantImage from "../assets/ecoPictures/plant.webp";
import bagImage from "../assets/ecoPictures/recucleBag.webp";
import bottleImage from "../assets/ecoPictures/bottle.webp";
import electricityImage from "../assets/ecoPictures/electricity.webp";
import bicycleImage from "../assets/ecoPictures/bicycle.webp";
import recycleImage from "../assets/ecoPictures/bicycle.webp";
import waterImage from "../assets/ecoPictures/water.webp";
import woodImage from "../assets/ecoPictures/wood.webp";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <IntroCard
        title=" Welcome to Planet Habits!"
        message={
          <>
            "Start small, make a big impact. Planet Habits helps you build
            simple, eco-friendly habits that protect the planet — one day at a
            time. Whether it’s turning off unused lights, biking instead of
            driving, or cutting down on waste, every action matters. Track your
            progress, learn new tips, and join a community of changemakers
            working toward a cleaner, greener future."
          </>
        }
      />
      {/*EcoCard section*/}
      <div className="container-fluid py-5">
        <div className="row justify-content-center">
          <div className="col-12 col-md-6 d-flex justify-content-center mb-4">
            <EcoCard
              imageSrc={plantImage}
              alt="picture of a plant"
              buttonText="Planting for the Planet!"
              modalId="plant"
              modalTitle="🌱 Planting for the Planet"
              modalBody={
                <>
                  <p>
                    🌿 <strong>Nature Starts with You:</strong> Planting isn't
                    just about greenery — it's about giving back to the planet.
                    Each plant helps filter pollutants, reduce urban heat, and
                    bring beauty to the world around you.
                  </p>
                  <p>
                    🌾 <strong>Grow Today for Tomorrow:</strong> Even a single
                    potted plant on a windowsill contributes to a healthier
                    environment. Imagine the impact when we all plant together.
                  </p>
                  <p>
                    🌻 <strong>Biodiversity Begins at Home:</strong> From native
                    wildflowers to leafy trees, your garden or planter box
                    becomes a safe haven for bees, butterflies, and birds.
                  </p>
                  <p>
                    🌎 <strong>Act Local, Grow Global:</strong> No space is too
                    small to make an impact. Balcony gardens, community plots,
                    or reforestation projects — all lead toward a more
                    sustainable Earth.
                  </p>
                  <p>
                    🌼 <strong>Mindful Planting, Meaningful Change:</strong> The
                    act of planting also nourishes your well-being. It’s a
                    moment of connection — with the soil, the seasons, and
                    something greater than ourselves.
                  </p>
                  <p>
                    🌳 <strong>Fun Planting Facts:</strong>
                  </p>
                  <ul>
                    <li>
                      🌿 One mature tree can absorb up to 48 pounds of CO₂ per
                      year — like erasing the emissions from driving 100 miles!
                    </li>
                    <li>
                      Urban trees can cool cities by up to 9°F (5°C) in the
                      summer — natural air conditioning!
                    </li>
                    <li>
                      A single tree can provide a day’s oxygen for four people.
                      Breathe easy!
                    </li>
                    <li>
                      🌱 Plants can “talk” — they release signals to warn others
                      of danger or attract pollinators.
                    </li>
                    <li>
                      🌻 Sunflowers clean the soil and were even used after the
                      Chernobyl disaster.
                    </li>
                    <li>
                      🌿 Herbs like basil, mint, and lavender repel insects
                      naturally — no chemicals needed.
                    </li>
                    <li>
                      🪴 Houseplants aren’t just pretty — NASA found they remove
                      air pollutants indoors.
                    </li>
                  </ul>
                </>
              }
            />
          </div>

          {/*Second card*/}

          <div className="col-12 col-md-6 d-flex justify-content-center mb-4">
            <EcoCard
              imageSrc={bagImage}
              alt="picture of a recucle bag"
              buttonText="Tote-ally Eco-Friendly!"
              modalId="bag"
              modalTitle="Tote-ally Eco-Friendly!"
              modalBody={
                <>
                  <>
                    <p>
                      <strong>🛍️ Reusable Bags: The Everyday Eco Hero</strong>
                      <br />
                      Plastic bags might be convenient, but they come at a cost
                      to the planet. Reusable bags help keep plastic out of our
                      oceans, reduce landfill waste, and support a culture of
                      mindful consumption.
                    </p>

                    <p>
                      <strong>♻️ A Simple Swap with a Powerful Impact</strong>
                      <br />
                      Switching to reusable bags helps cut back on the 5
                      trillion single-use plastic bags consumed globally each
                      year. One sturdy tote can last for years — replacing
                      hundreds of throwaways.
                    </p>

                    <p>
                      <strong>🌊 Protecting Oceans, One Bag at a Time</strong>
                      <br />
                      Lightweight plastic bags are easily blown into waterways,
                      where marine life can mistake them for food. By carrying
                      your own bag, you're helping save turtles, whales, and
                      seabirds from plastic harm.
                    </p>

                    <p>
                      <strong>🛒 Built to Last, Made to Inspire</strong>
                      <br />
                      Reusable bags come in all shapes, styles, and materials —
                      from cotton and jute to recycled plastic bottles. They're
                      stronger, more comfortable to carry, and often support
                      small businesses and fair trade.
                    </p>

                    <p>
                      <strong>💡 Make It a Habit</strong>
                      <br />
                      Keep one in your car, purse, or backpack. Hang a few near
                      your front door. The easier it is to grab one, the more
                      likely it becomes a natural habit. Eco-friendly can be
                      easy and chic!
                    </p>

                    <p>
                      <strong>🌍 Fun Reusable Bag Facts:</strong>
                    </p>
                    <ul>
                      <li>
                        A reusable bag can eliminate the need for over{" "}
                        <strong>700 plastic bags</strong> in its lifetime.
                      </li>
                      <li>
                        Some stores offer <strong>cash-back incentives</strong>{" "}
                        or discounts when you bring your own bag.
                      </li>
                      <li>
                        Plastic bags require{" "}
                        <strong>12 million barrels of oil annually</strong> just
                        to produce in the U.S.
                      </li>
                      <li>
                        Turtles often mistake plastic bags for jellyfish, a key
                        part of their diet.
                      </li>
                      <li>
                        Jute and cotton bags are <strong>biodegradable</strong>{" "}
                        and <strong>compostable</strong> when they wear out.
                      </li>
                      <li>
                        Creative reuse: old T-shirts can be turned into stylish,
                        no-sew totes!
                      </li>
                    </ul>

                    <p>
                      Bringing your own bag sends a message — you're part of the
                      movement toward a cleaner, greener future. 🌿
                    </p>
                  </>
                </>
              }
            />
          </div>
        </div>
      </div>
      {/*Third card*/}
      <div className="container-fluid py-5">
        <div className="row justify-content-center">
          <div className="col-12 col-md-6 d-flex justify-content-center mb-4">
            <EcoCard
              imageSrc={bottleImage}
              alt="picture of a plant"
              buttonText="One Bottle, Endless Impact!"
              modalId="bottle"
              modalTitle="🌍 Environmental Benefits:"
              modalBody={
                <>
                  <p>
                    💧 <strong>Reusable Bottle: Small Habit, Big Impact</strong>
                  </p>
                  <p>
                    <strong>Reduces Plastic Waste:</strong>
                    <br />A single reusable bottle can replace hundreds of
                    disposable plastic bottles each year.
                  </p>
                  <p>
                    <strong>Prevents Pollution:</strong>
                    <br />
                    Plastic bottles often end up in landfills, oceans, and
                    waterways, harming wildlife and ecosystems.
                  </p>
                  <p>
                    <strong>Saves Resources:</strong>
                    <br />
                    Producing one plastic bottle requires 3x the water it holds
                    and contributes to carbon emissions from oil extraction,
                    manufacturing, and transport.
                  </p>
                  <p>
                    💵 <strong>Economic Benefits:</strong>
                    <br />
                    Buying bottled water regularly can cost hundreds of dollars
                    annually — a reusable bottle pays for itself in just weeks.
                  </p>
                  <p>
                    💚 <strong>Health & Lifestyle Benefits:</strong>
                    <br />
                    Made of safer materials (like stainless steel or BPA-free
                    plastic), reusable bottles avoid the chemical leaching that
                    can happen in cheap disposable plastics. They also encourage
                    better hydration since people tend to drink more water when
                    carrying a bottle they love.
                  </p>
                  <p>
                    🌱 <strong>Fun Fact:</strong> Americans use 50 billion
                    plastic water bottles each year. If just 1 in 10 people used
                    a reusable bottle, we could cut out 5 billion bottles
                    annually.
                  </p>
                </>
              }
            />
          </div>

          {/*Fourth card*/}

          <div className="col-12 col-md-6 d-flex justify-content-center mb-4">
            <EcoCard
              imageSrc={electricityImage}
              alt="picture of a recucle bag"
              buttonText=" Power Down, Light Up the Planet!"
              modalId="electricity"
              modalTitle="🌍 Environmental Benefits:"
              modalBody={
                <>
                  <p>
                    💡 <strong>Power Down, Light Up the Planet</strong>
                    <br />
                    Turning off unused lights and devices may seem small, but
                    every switch you flip reduces your carbon footprint and
                    helps the planet breathe easier.
                  </p>

                  <p>
                    🔌 <strong>Unplug to Uplift</strong>
                    <br />
                    Electronics continue to draw “phantom energy” even when off.
                    Unplug chargers and small appliances to cut silent energy
                    waste.
                  </p>

                  <p>
                    💡 <strong>Brighter Ideas with Less Energy</strong>
                    <br />
                    LEDs use up to 80% less energy and last 25x longer than old
                    bulbs — saving energy and money.
                  </p>

                  <p>
                    🌞 <strong>Let the Sunshine In</strong>
                    <br />
                    Make use of natural daylight whenever possible. It’s free,
                    mood-boosting, and helps you lower energy use during the
                    day.
                  </p>

                  <p>
                    ❄️ <strong>Cozy Efficiency</strong>
                    <br />
                    Adjusting your thermostat a few degrees can reduce heating
                    and cooling energy use dramatically — and you may not even
                    notice the difference.
                  </p>

                  <p>
                    ⚡ <strong>Fun Power-Saving Facts</strong>
                    <br />
                    • 💡 One 60-watt bulb off for 4 hours/day = ~20 lbs CO₂
                    saved yearly!
                    <br />
                    • 🔋 The average home can save $100–$200/year by unplugging
                    idle devices.
                    <br />
                    • 🌍 Replacing one bulb with an Energy Star LED can cut
                    emissions equal to taking 800,000 cars off the road if done
                    nationwide.
                    <br />
                    • 📺 TVs on standby can still draw up to 10W/hour — unplug
                    to save.
                    <br />• 🔌 Smart power strips make it easy to shut down
                    whole stations (like your desk or TV area) with one switch.
                  </p>

                  <p>
                    🌟 <strong>Remember:</strong> Every watt you save is a step
                    toward a cleaner, cooler planet!
                  </p>
                </>
              }
            />
          </div>
        </div>
      </div>
      {/*EcoCard section*/}
      <div className="container-fluid py-5">
        <div className="row justify-content-center">
          <div className="col-12 col-md-6 d-flex justify-content-center mb-4">
            <EcoCard
              imageSrc={plantImage}
              alt="picture of a plant"
              buttonText="Planting for the Planet!"
              modalId="plant"
              modalTitle="🌱 Planting for the Planet"
              modalBody={
                <>
                  <p>
                    🌿 <strong>Nature Starts with You:</strong> Planting isn't
                    just about greenery — it's about giving back to the planet.
                    Each plant helps filter pollutants, reduce urban heat, and
                    bring beauty to the world around you.
                  </p>
                  <p>
                    🌾 <strong>Grow Today for Tomorrow:</strong> Even a single
                    potted plant on a windowsill contributes to a healthier
                    environment. Imagine the impact when we all plant together.
                  </p>
                  <p>
                    🌻 <strong>Biodiversity Begins at Home:</strong> From native
                    wildflowers to leafy trees, your garden or planter box
                    becomes a safe haven for bees, butterflies, and birds.
                  </p>
                  <p>
                    🌎 <strong>Act Local, Grow Global:</strong> No space is too
                    small to make an impact. Balcony gardens, community plots,
                    or reforestation projects — all lead toward a more
                    sustainable Earth.
                  </p>
                  <p>
                    🌼 <strong>Mindful Planting, Meaningful Change:</strong> The
                    act of planting also nourishes your well-being. It’s a
                    moment of connection — with the soil, the seasons, and
                    something greater than ourselves.
                  </p>
                  <p>
                    🌳 <strong>Fun Planting Facts:</strong>
                  </p>
                  <ul>
                    <li>
                      🌿 One mature tree can absorb up to 48 pounds of CO₂ per
                      year — like erasing the emissions from driving 100 miles!
                    </li>
                    <li>
                      Urban trees can cool cities by up to 9°F (5°C) in the
                      summer — natural air conditioning!
                    </li>
                    <li>
                      A single tree can provide a day’s oxygen for four people.
                      Breathe easy!
                    </li>
                    <li>
                      🌱 Plants can “talk” — they release signals to warn others
                      of danger or attract pollinators.
                    </li>
                    <li>
                      🌻 Sunflowers clean the soil and were even used after the
                      Chernobyl disaster.
                    </li>
                    <li>
                      🌿 Herbs like basil, mint, and lavender repel insects
                      naturally — no chemicals needed.
                    </li>
                    <li>
                      🪴 Houseplants aren’t just pretty — NASA found they remove
                      air pollutants indoors.
                    </li>
                  </ul>
                </>
              }
            />
          </div>

          {/*Second card*/}

          <div className="col-12 col-md-6 d-flex justify-content-center mb-4">
            <EcoCard
              imageSrc={bagImage}
              alt="picture of a recucle bag"
              buttonText="Tote-ally Eco-Friendly!"
              modalId="bag"
              modalTitle="Tote-ally Eco-Friendly!"
              modalBody={
                <>
                  <>
                    <p>
                      <strong>🛍️ Reusable Bags: The Everyday Eco Hero</strong>
                      <br />
                      Plastic bags might be convenient, but they come at a cost
                      to the planet. Reusable bags help keep plastic out of our
                      oceans, reduce landfill waste, and support a culture of
                      mindful consumption.
                    </p>

                    <p>
                      <strong>♻️ A Simple Swap with a Powerful Impact</strong>
                      <br />
                      Switching to reusable bags helps cut back on the 5
                      trillion single-use plastic bags consumed globally each
                      year. One sturdy tote can last for years — replacing
                      hundreds of throwaways.
                    </p>

                    <p>
                      <strong>🌊 Protecting Oceans, One Bag at a Time</strong>
                      <br />
                      Lightweight plastic bags are easily blown into waterways,
                      where marine life can mistake them for food. By carrying
                      your own bag, you're helping save turtles, whales, and
                      seabirds from plastic harm.
                    </p>

                    <p>
                      <strong>🛒 Built to Last, Made to Inspire</strong>
                      <br />
                      Reusable bags come in all shapes, styles, and materials —
                      from cotton and jute to recycled plastic bottles. They're
                      stronger, more comfortable to carry, and often support
                      small businesses and fair trade.
                    </p>

                    <p>
                      <strong>💡 Make It a Habit</strong>
                      <br />
                      Keep one in your car, purse, or backpack. Hang a few near
                      your front door. The easier it is to grab one, the more
                      likely it becomes a natural habit. Eco-friendly can be
                      easy and chic!
                    </p>

                    <p>
                      <strong>🌍 Fun Reusable Bag Facts:</strong>
                    </p>
                    <ul>
                      <li>
                        A reusable bag can eliminate the need for over{" "}
                        <strong>700 plastic bags</strong> in its lifetime.
                      </li>
                      <li>
                        Some stores offer <strong>cash-back incentives</strong>{" "}
                        or discounts when you bring your own bag.
                      </li>
                      <li>
                        Plastic bags require{" "}
                        <strong>12 million barrels of oil annually</strong> just
                        to produce in the U.S.
                      </li>
                      <li>
                        Turtles often mistake plastic bags for jellyfish, a key
                        part of their diet.
                      </li>
                      <li>
                        Jute and cotton bags are <strong>biodegradable</strong>{" "}
                        and <strong>compostable</strong> when they wear out.
                      </li>
                      <li>
                        Creative reuse: old T-shirts can be turned into stylish,
                        no-sew totes!
                      </li>
                    </ul>

                    <p>
                      Bringing your own bag sends a message — you're part of the
                      movement toward a cleaner, greener future. 🌿
                    </p>
                  </>
                </>
              }
            />
          </div>
        </div>
      </div>
      {/*EcoCard section*/}
      <div className="container-fluid py-5">
        <div className="row justify-content-center">
          <div className="col-12 col-md-6 d-flex justify-content-center mb-4">
            <EcoCard
              imageSrc={plantImage}
              alt="picture of a plant"
              buttonText="Planting for the Planet!"
              modalId="plant"
              modalTitle="🌱 Planting for the Planet"
              modalBody={
                <>
                  <p>
                    🌿 <strong>Nature Starts with You:</strong> Planting isn't
                    just about greenery — it's about giving back to the planet.
                    Each plant helps filter pollutants, reduce urban heat, and
                    bring beauty to the world around you.
                  </p>
                  <p>
                    🌾 <strong>Grow Today for Tomorrow:</strong> Even a single
                    potted plant on a windowsill contributes to a healthier
                    environment. Imagine the impact when we all plant together.
                  </p>
                  <p>
                    🌻 <strong>Biodiversity Begins at Home:</strong> From native
                    wildflowers to leafy trees, your garden or planter box
                    becomes a safe haven for bees, butterflies, and birds.
                  </p>
                  <p>
                    🌎 <strong>Act Local, Grow Global:</strong> No space is too
                    small to make an impact. Balcony gardens, community plots,
                    or reforestation projects — all lead toward a more
                    sustainable Earth.
                  </p>
                  <p>
                    🌼 <strong>Mindful Planting, Meaningful Change:</strong> The
                    act of planting also nourishes your well-being. It’s a
                    moment of connection — with the soil, the seasons, and
                    something greater than ourselves.
                  </p>
                  <p>
                    🌳 <strong>Fun Planting Facts:</strong>
                  </p>
                  <ul>
                    <li>
                      🌿 One mature tree can absorb up to 48 pounds of CO₂ per
                      year — like erasing the emissions from driving 100 miles!
                    </li>
                    <li>
                      Urban trees can cool cities by up to 9°F (5°C) in the
                      summer — natural air conditioning!
                    </li>
                    <li>
                      A single tree can provide a day’s oxygen for four people.
                      Breathe easy!
                    </li>
                    <li>
                      🌱 Plants can “talk” — they release signals to warn others
                      of danger or attract pollinators.
                    </li>
                    <li>
                      🌻 Sunflowers clean the soil and were even used after the
                      Chernobyl disaster.
                    </li>
                    <li>
                      🌿 Herbs like basil, mint, and lavender repel insects
                      naturally — no chemicals needed.
                    </li>
                    <li>
                      🪴 Houseplants aren’t just pretty — NASA found they remove
                      air pollutants indoors.
                    </li>
                  </ul>
                </>
              }
            />
          </div>

          {/*Second card*/}

          <div className="col-12 col-md-6 d-flex justify-content-center mb-4">
            <EcoCard
              imageSrc={bagImage}
              alt="picture of a recucle bag"
              buttonText="Tote-ally Eco-Friendly!"
              modalId="bag"
              modalTitle="Tote-ally Eco-Friendly!"
              modalBody={
                <>
                  <>
                    <p>
                      <strong>🛍️ Reusable Bags: The Everyday Eco Hero</strong>
                      <br />
                      Plastic bags might be convenient, but they come at a cost
                      to the planet. Reusable bags help keep plastic out of our
                      oceans, reduce landfill waste, and support a culture of
                      mindful consumption.
                    </p>

                    <p>
                      <strong>♻️ A Simple Swap with a Powerful Impact</strong>
                      <br />
                      Switching to reusable bags helps cut back on the 5
                      trillion single-use plastic bags consumed globally each
                      year. One sturdy tote can last for years — replacing
                      hundreds of throwaways.
                    </p>

                    <p>
                      <strong>🌊 Protecting Oceans, One Bag at a Time</strong>
                      <br />
                      Lightweight plastic bags are easily blown into waterways,
                      where marine life can mistake them for food. By carrying
                      your own bag, you're helping save turtles, whales, and
                      seabirds from plastic harm.
                    </p>

                    <p>
                      <strong>🛒 Built to Last, Made to Inspire</strong>
                      <br />
                      Reusable bags come in all shapes, styles, and materials —
                      from cotton and jute to recycled plastic bottles. They're
                      stronger, more comfortable to carry, and often support
                      small businesses and fair trade.
                    </p>

                    <p>
                      <strong>💡 Make It a Habit</strong>
                      <br />
                      Keep one in your car, purse, or backpack. Hang a few near
                      your front door. The easier it is to grab one, the more
                      likely it becomes a natural habit. Eco-friendly can be
                      easy and chic!
                    </p>

                    <p>
                      <strong>🌍 Fun Reusable Bag Facts:</strong>
                    </p>
                    <ul>
                      <li>
                        A reusable bag can eliminate the need for over{" "}
                        <strong>700 plastic bags</strong> in its lifetime.
                      </li>
                      <li>
                        Some stores offer <strong>cash-back incentives</strong>{" "}
                        or discounts when you bring your own bag.
                      </li>
                      <li>
                        Plastic bags require{" "}
                        <strong>12 million barrels of oil annually</strong> just
                        to produce in the U.S.
                      </li>
                      <li>
                        Turtles often mistake plastic bags for jellyfish, a key
                        part of their diet.
                      </li>
                      <li>
                        Jute and cotton bags are <strong>biodegradable</strong>{" "}
                        and <strong>compostable</strong> when they wear out.
                      </li>
                      <li>
                        Creative reuse: old T-shirts can be turned into stylish,
                        no-sew totes!
                      </li>
                    </ul>

                    <p>
                      Bringing your own bag sends a message — you're part of the
                      movement toward a cleaner, greener future. 🌿
                    </p>
                  </>
                </>
              }
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

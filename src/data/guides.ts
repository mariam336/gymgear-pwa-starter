export type BuyingGuide = {
  slug: string;
  title: string;
  category: string;
  subtitle: string;
  badge: string;
  intro: string;
  forWho: string;
  criteria: string[];
  pitfalls: string[];
};

// Starter examples: research topics, NOT tested products or affiliate recommendations.
export const guides: BuyingGuide[] = [
  {
    slug: 'adjustable-dumbbells-small-spaces',
    title: 'Adjustable Dumbbells for Small Apartments',
    category: 'Home Gym',
    badge: 'Space saver',
    subtitle: 'What matters when you need strength equipment in a small room.',
    intro: 'Adjustable dumbbells can replace several fixed-weight pairs. The right choice depends on available space, weight range and how securely the adjustment mechanism locks.',
    forWho: 'Apartment residents, beginners and people building compact home gyms.',
    criteria: ['Available weight range and increment sizes', 'Locking mechanism and build quality', 'Footprint and storage dimensions', 'Warranty, returns and local availability'],
    pitfalls: ['Unverified maximum-load claims', 'Loose adjustment mechanisms', 'Large size that limits certain exercises']
  },
  {
    slug: 'resistance-bands-beginners',
    title: 'Resistance Bands for Beginners',
    category: 'Accessories',
    badge: 'Beginner friendly',
    subtitle: 'Find the right resistance, materials and exercise versatility.',
    intro: 'Resistance bands are compact training tools, but not all sets are equally durable or easy to use. Compare clear resistance ratings and handles before buying.',
    forWho: 'Beginners, travelers and people with limited storage.',
    criteria: ['Resistance levels stated by the manufacturer', 'Handle comfort and material', 'Anchor compatibility and included accessories', 'Replacement policy and warranty'],
    pitfalls: ['Damaged bands', 'Poor quality door anchors', 'Overstated resistance ratings']
  },
  {
    slug: 'weight-bench-home-gym',
    title: 'Weight Benches for Home Workouts',
    category: 'Strength',
    badge: 'Essential setup',
    subtitle: 'Check stability, load ratings and storage before buying.',
    intro: 'A stable bench can improve home workouts. Your training goals and room size determine whether you need a flat, adjustable or foldable model.',
    forWho: 'People doing dumbbell workouts at home.',
    criteria: ['Verified total load rating', 'Footprint and height', 'Padding and adjustment positions', 'Stability and frame construction'],
    pitfalls: ['Unclear load-test information', 'Wobbly hinges', 'Inadequate bench height']
  },
  {
    slug: 'jump-ropes-cardio',
    title: 'Jump Ropes for Indoor Cardio',
    category: 'Cardio',
    badge: 'Quick workouts',
    subtitle: 'Comfortable handles and the right rope length make a difference.',
    intro: 'Jump ropes differ in cable weight, adjustability and handling. Choose a rope that matches your available floor space and experience level.',
    forWho: 'Beginners and people doing short cardio sessions.',
    criteria: ['Adjustable cable length', 'Grip and handle feel', 'Material and surface compatibility', 'Replacement components'],
    pitfalls: ['Unprotected cables on rough floors', 'Ropes that cannot be shortened', 'Heavy ropes for complete beginners']
  },
  {
    slug: 'foam-rollers-recovery',
    title: 'Foam Rollers for Post-Workout Use',
    category: 'Recovery',
    badge: 'Recovery essentials',
    subtitle: 'Compare firmness, length and surface texture.',
    intro: 'A foam roller should feel manageable and meet your preferred pressure level. Surface texture, density and size are useful considerations.',
    forWho: 'Fitness enthusiasts looking for simple recovery accessories.',
    criteria: ['Firmness and density', 'Roller length and diameter', 'Surface texture and easy cleaning', 'Material durability'],
    pitfalls: ['Excessively hard rollers for sensitive areas', 'Poor-quality foam that deforms', 'Medical claims without evidence']
  },
  {
    slug: 'gym-bags-shoe-pockets',
    title: 'Gym Bags with Shoe Compartments',
    category: 'Everyday gear',
    badge: 'Carry smarter',
    subtitle: 'Choose organization and durability for daily gym visits.',
    intro: 'A practical gym bag balances space for clothing and shoes with convenient organization and comfortable carrying options.',
    forWho: 'Commuters, students and everyday gym users.',
    criteria: ['Separate shoe compartment and ventilation', 'Capacity and dimensions', 'Washable lining and zip quality', 'Strap comfort and warranty'],
    pitfalls: ['Misleading capacity claims', 'Weak seams', 'Hard-to-clean interior']
  }
];

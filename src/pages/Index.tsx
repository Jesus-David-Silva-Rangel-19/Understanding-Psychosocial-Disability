
import React from 'react';
import { Brain, Heart, Users, Book, MessageSquare, Search, Info } from 'lucide-react';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Section from '@/components/Section';
import DisorderCard from '@/components/DisorderCard';
import FaqItem from '@/components/FaqItem';
import Quote from '@/components/Quote';
import StoryCard from '@/components/StoryCard';
import SupportMethod from '@/components/SupportMethod';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Navigation />
      <main className="flex-grow">
        <Hero />
        
        {/* What is Psychosocial Disability? */}
        <Section id="what-is" title="What is Psychosocial Disability?">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <p>
                A psychosocial disability refers to a disability that arises when mental health conditions interact with social barriers. Unlike a purely medical view of mental illness, psychosocial disability recognizes the important social dimensions of disability and the impact of social obstacles faced by people with mental health conditions.
              </p>
              <p>
                These disabilities arise from the interaction between mental health conditions and various social factors, creating barriers to participation in society on an equal basis with others.
              </p>
            </div>
            <div className="space-y-4">
              <p>
                The Convention on the Rights of Persons with Disabilities (CRPD) recognizes that disability is an evolving concept resulting from the interaction between persons with impairments and attitudinal and environmental barriers that hinder their full and effective participation in society.
              </p>
              <p>
                Psychosocial disabilities can be temporary or permanent, episodic or ongoing, and can vary in severity. They can affect a person's thinking, perception, mood, personality, and relationships.
              </p>
            </div>
          </div>
          
          <Quote 
            text="Psychosocial disability looks beyond the medical model to consider how society creates barriers for people with mental health conditions."
            author="World Health Organization"
            className="my-12"
          />
          
          <div className="mt-8">
            <h3 className="text-2xl font-alegreya font-black mb-4 text-theme-purple-dark">
              Relationship to Mental Health
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="card-highlight p-6">
                <h4 className="text-xl font-alegreya font-black mb-3 text-theme-blue">Overlap</h4>
                <p>Mental health conditions can lead to psychosocial disabilities when they interact with social barriers, but not all mental health conditions result in disability. The severity, duration, and social context all play important roles.</p>
              </div>
              <div className="card-highlight p-6">
                <h4 className="text-xl font-alegreya font-black mb-3 text-theme-blue">Distinction</h4>
                <p>While mental health focuses on the medical and psychological aspects of a condition, psychosocial disability emphasizes the social and functional impacts, including experiences of discrimination, exclusion, and barriers to participation.</p>
              </div>
            </div>
          </div>
        </Section>
        
        {/* Characteristics */}
        <Section id="characteristics" title="Characteristics of Psychosocial Disability" color="light">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card-highlight p-6">
              <h3 className="text-xl font-alegreya font-black mb-3 text-theme-purple-dark">Fluctuating Nature</h3>
              <p>Psychosocial disabilities often have an episodic nature. Symptoms and functioning may vary over time, with periods of greater difficulty and periods of wellness.</p>
            </div>
            
            <div className="card-highlight p-6">
              <h3 className="text-xl font-alegreya font-black mb-3 text-theme-purple-dark">Invisible Disability</h3>
              <p>Often not immediately apparent to others, leading to misunderstandings about the validity and seriousness of the disability.</p>
            </div>
            
            <div className="card-highlight p-6">
              <h3 className="text-xl font-alegreya font-black mb-3 text-theme-purple-dark">Social Barriers</h3>
              <p>Environmental and attitudinal barriers can significantly worsen the disability. Stigma and discrimination are particularly common social barriers.</p>
            </div>
            
            <div className="card-highlight p-6">
              <h3 className="text-xl font-alegreya font-black mb-3 text-theme-purple-dark">Functional Impact</h3>
              <p>Can affect various domains of functioning including self-care, social interactions, concentration, adaptability, and the ability to maintain employment.</p>
            </div>
            
            <div className="card-highlight p-6">
              <h3 className="text-xl font-alegreya font-black mb-3 text-theme-purple-dark">Recovery-Oriented</h3>
              <p>Recovery is possible and common. Recovery may not mean absence of symptoms but rather improved management and quality of life.</p>
            </div>
            
            <div className="card-highlight p-6">
              <h3 className="text-xl font-alegreya font-black mb-3 text-theme-purple-dark">Diverse Experiences</h3>
              <p>Each person's experience is unique, shaped by their specific condition, personal attributes, and social environment.</p>
            </div>
          </div>
        </Section>
        
        {/* Common Disorders */}
        <Section id="disorders" title="Most Frequent Disorders">
          <p className="text-center max-w-3xl mx-auto mb-10">
            The following are among the most common mental health conditions that can lead to psychosocial disability. Click on each to learn more.
          </p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            <DisorderCard
              title="Major Depressive Disorder"
              description="A mood disorder characterized by persistent feelings of sadness, hopelessness, and loss of interest in activities. It significantly affects daily functioning and quality of life."
              prevalence="Affects approximately 264 million people worldwide."
            />
            
            <DisorderCard
              title="Anxiety Disorders"
              description="Include generalized anxiety disorder, panic disorder, phobias, social anxiety disorder, and others. They involve excessive fear or worry that interferes with daily activities."
              prevalence="Most common mental disorders globally, affecting 284 million people."
            />
            
            <DisorderCard
              title="Bipolar Disorder"
              description="Characterized by alternating periods of depression and mania or hypomania. These mood swings can significantly impact energy, activity, and ability to function."
              prevalence="Affects approximately 45 million people worldwide."
            />
            
            <DisorderCard
              title="Schizophrenia"
              description="A serious mental disorder characterized by distortions in thinking, perception, emotions, language, sense of self, and behavior. Can include hallucinations and delusions."
              prevalence="Affects approximately 20 million people worldwide."
            />
            
            <DisorderCard
              title="Post-Traumatic Stress Disorder (PTSD)"
              description="Develops in some people who have experienced a shocking, scary, or dangerous event. Symptoms can include flashbacks, nightmares, severe anxiety, and uncontrollable thoughts about the event."
              prevalence="Lifetime prevalence ranges from 1% to 14% depending on social factors."
            />
            
            <DisorderCard
              title="Obsessive-Compulsive Disorder (OCD)"
              description="Characterized by unreasonable thoughts and fears (obsessions) that lead to repetitive behaviors (compulsions). These obsessions and compulsions interfere with daily activities and cause significant distress."
              prevalence="Affects approximately 1-3% of the general population."
            />
          </div>
        </Section>
        
        {/* Support & Help */}
        <Section id="support" title="Support & Help" color="light">
          <p className="text-center max-w-3xl mx-auto mb-10">
            There are various approaches and resources available to support individuals with psychosocial disabilities. An integrated, person-centered approach often yields the best results.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <SupportMethod
              icon={<Brain className="h-6 w-6" />}
              title="Therapy and Counseling"
              description="Various therapeutic approaches like Cognitive Behavioral Therapy (CBT), Dialectical Behavior Therapy (DBT), and psychotherapy can help manage symptoms and improve coping skills."
            />
            
            <SupportMethod
              icon={<Heart className="h-6 w-6" />}
              title="Medication"
              description="When prescribed and monitored by qualified healthcare providers, medication can be effective in managing symptoms of many mental health conditions."
            />
            
            <SupportMethod
              icon={<Users className="h-6 w-6" />}
              title="Peer Support"
              description="Connecting with others who have similar experiences can provide validation, hope, practical advice, and reduce feelings of isolation."
            />
            
            <SupportMethod
              icon={<Book className="h-6 w-6" />}
              title="Education"
              description="Learning about one's condition, triggers, and management strategies empowers individuals to take an active role in their recovery."
            />
            
            <SupportMethod
              icon={<MessageSquare className="h-6 w-6" />}
              title="Community Support"
              description="Support groups, community mental health centers, and advocacy organizations can provide valuable resources and connections."
            />
            
            <SupportMethod
              icon={<Search className="h-6 w-6" />}
              title="Reasonable Accommodations"
              description="Workplace and educational accommodations can help remove barriers to participation and success in these environments."
            />
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-md">
            <h3 className="text-2xl font-alegreya font-black mb-4 text-theme-purple-dark text-center">
              Frequently Asked Questions
            </h3>
            
            <div className="max-w-3xl mx-auto">
              <FaqItem
                question="How do I know if I need professional help?"
                answer="If your mental health symptoms are causing significant distress or interfering with your daily life, relationships, or work for more than two weeks, it's a good idea to consult a mental health professional. Trust your instincts—if you feel something is wrong, seek help."
              />
              
              <FaqItem
                question="What's the difference between a psychiatrist and a psychologist?"
                answer="Psychiatrists are medical doctors who can prescribe medication and diagnose mental health conditions. Psychologists typically have doctoral degrees in psychology and provide therapy and counseling but usually cannot prescribe medications (with some exceptions)."
              />
              
              <FaqItem
                question="Is medication always necessary?"
                answer="No, medication is not always necessary. Treatment plans should be individualized based on the specific condition, its severity, and the person's preferences. Many people benefit from therapy alone or a combination of therapy and lifestyle changes."
              />
              
              <FaqItem
                question="How can I support a loved one with a psychosocial disability?"
                answer="Listen without judgment, educate yourself about their condition, encourage treatment, be patient and consistent, respect their autonomy, take care of yourself, and offer practical help. Remember that recovery is not linear and setbacks are part of the process."
              />
            </div>
          </div>
        </Section>
        
        {/* OCD & Psychosocial Disability */}
        <Section id="ocd" title="The Role of OCD in Psychosocial Disability">
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-2xl font-alegreya font-black mb-4 text-theme-purple-dark">
                Understanding OCD
              </h3>
              <p className="mb-4">
                Obsessive-Compulsive Disorder (OCD) is characterized by unwanted, intrusive thoughts (obsessions) and repetitive behaviors or mental acts (compulsions) that individuals feel driven to perform to reduce anxiety or prevent a dreaded event.
              </p>
              <p className="mb-4">
                OCD can significantly interfere with daily activities and social interactions. The time consumed by obsessions and compulsions, along with the distress they cause, can lead to substantial disability.
              </p>
              <p>
                Common obsessions include fear of contamination, need for symmetry or exactness, fear of harm, and unwanted aggressive or taboo thoughts. Common compulsions include excessive cleaning, checking, counting, arranging, and seeking reassurance.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-alegreya font-black mb-4 text-theme-purple-dark">
                Impact on Functioning
              </h3>
              <div className="space-y-4">
                <div className="card-highlight p-4">
                  <h4 className="text-lg font-bold mb-2 text-theme-blue">Social Functioning</h4>
                  <p>OCD can lead to social withdrawal, strained relationships, and reduced participation in social activities due to time spent on rituals or fear of triggering obsessions.</p>
                </div>
                
                <div className="card-highlight p-4">
                  <h4 className="text-lg font-bold mb-2 text-theme-blue">Occupational Functioning</h4>
                  <p>OCD can affect work performance, attendance, and advancement opportunities. Some individuals may avoid certain jobs or responsibilities that trigger their OCD.</p>
                </div>
                
                <div className="card-highlight p-4">
                  <h4 className="text-lg font-bold mb-2 text-theme-blue">Daily Living</h4>
                  <p>Basic activities like eating, grooming, and housekeeping can become time-consuming and complicated due to rituals and obsessions.</p>
                </div>
              </div>
            </div>
          </div>
          
          <Quote 
            text="OCD is not just about being tidy or particular. It's a serious condition where unwanted thoughts and rituals can take control of a person's life and lead to significant disability."
            author="International OCD Foundation"
            className="my-12"
          />
          
          <div>
            <h3 className="text-2xl font-alegreya font-black mb-6 text-theme-purple-dark text-center">
              Effective Treatments for OCD
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="card-highlight p-6">
                <h4 className="text-xl font-alegreya font-black mb-3 text-theme-blue">Exposure and Response Prevention (ERP)</h4>
                <p>A type of cognitive-behavioral therapy that involves gradually facing fears without performing rituals, allowing anxiety to naturally decrease over time.</p>
              </div>
              
              <div className="card-highlight p-6">
                <h4 className="text-xl font-alegreya font-black mb-3 text-theme-blue">Medication</h4>
                <p>Selective serotonin reuptake inhibitors (SSRIs) are commonly prescribed and can be effective in reducing OCD symptoms, especially when combined with therapy.</p>
              </div>
              
              <div className="card-highlight p-6">
                <h4 className="text-xl font-alegreya font-black mb-3 text-theme-blue">Support Groups</h4>
                <p>Connecting with others who understand the challenges of OCD can provide valuable emotional support and practical advice for managing the condition.</p>
              </div>
            </div>
          </div>
        </Section>
        
        {/* Resources */}
        <Section id="resources" title="Resources" color="light">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card-highlight p-6">
              <h3 className="text-xl font-alegreya font-black mb-3 text-theme-purple-dark">Crisis Helplines</h3>
              <ul className="space-y-2 list-disc list-inside text-gray-700">
                <li>National Suicide Prevention Lifeline: 1-800-273-8255</li>
                <li>Crisis Text Line: Text HOME to 741741</li>
                <li>SAMHSA's National Helpline: 1-800-662-HELP (4357)</li>
              </ul>
            </div>
            
            <div className="card-highlight p-6">
              <h3 className="text-xl font-alegreya font-black mb-3 text-theme-purple-dark">Organizations</h3>
              <ul className="space-y-2 list-disc list-inside text-gray-700">
                <li>National Alliance on Mental Illness (NAMI)</li>
                <li>Mental Health America</li>
                <li>International OCD Foundation</li>
                <li>Anxiety and Depression Association of America</li>
              </ul>
            </div>
            
            <div className="card-highlight p-6">
              <h3 className="text-xl font-alegreya font-black mb-3 text-theme-purple-dark">Digital Resources</h3>
              <ul className="space-y-2 list-disc list-inside text-gray-700">
                <li>MentalHealth.gov</li>
                <li>Psychology Today's Therapist Directory</li>
                <li>Mindfulness apps (Headspace, Calm)</li>
                <li>Online therapy platforms (BetterHelp, Talkspace)</li>
              </ul>
            </div>
            
            <div className="card-highlight p-6">
              <h3 className="text-xl font-alegreya font-black mb-3 text-theme-purple-dark">Books</h3>
              <ul className="space-y-2 list-disc list-inside text-gray-700">
                <li>"The Body Keeps the Score" by Bessel van der Kolk</li>
                <li>"Feeling Good" by David D. Burns</li>
                <li>"Brain Lock" by Jeffrey M. Schwartz (for OCD)</li>
                <li>"An Unquiet Mind" by Kay Redfield Jamison</li>
              </ul>
            </div>
            
            <div className="card-highlight p-6">
              <h3 className="text-xl font-alegreya font-black mb-3 text-theme-purple-dark">Advocacy</h3>
              <ul className="space-y-2 list-disc list-inside text-gray-700">
                <li>World Federation for Mental Health</li>
                <li>Disability Rights International</li>
                <li>Human Rights Watch - Disability Rights</li>
                <li>Local mental health advocacy groups</li>
              </ul>
            </div>
            
            <div className="card-highlight p-6">
              <h3 className="text-xl font-alegreya font-black mb-3 text-theme-purple-dark">Education</h3>
              <ul className="space-y-2 list-disc list-inside text-gray-700">
                <li>Mental Health First Aid courses</li>
                <li>National Institute of Mental Health resources</li>
                <li>World Health Organization publications</li>
                <li>University extension programs on mental health</li>
              </ul>
            </div>
          </div>
        </Section>
        
        {/* Personal Stories */}
        <Section id="stories" title="Personal Stories">
          <p className="text-center max-w-3xl mx-auto mb-10">
            Personal narratives can provide insights, hope, and a sense of connection. Here are some stories from individuals living with psychosocial disabilities.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <StoryCard
              title="Finding My Voice"
              excerpt="After years of silence, I finally found the courage to speak about my experiences with bipolar disorder. What started as a personal journal became a platform for advocacy and connection with others who were struggling similarly."
              author="Maria T."
            />
            
            <StoryCard
              title="Working Through It"
              excerpt="Navigating the workplace with severe anxiety wasn't easy. But with the right accommodations and a supportive manager, I've been able to thrive in my career despite the challenges."
              author="James L."
            />
            
            <StoryCard
              title="The Power of Community"
              excerpt="When I was diagnosed with schizophrenia, I felt isolated and afraid. Finding a community of people who understood what I was going through changed everything. Now I help others find their own supportive communities."
              author="David R."
            />
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-lg text-theme-purple-dark mb-6">
              Your story matters. Sharing experiences can help reduce stigma and inspire others.
            </p>
            
            <a 
              href="#" 
              className="bg-theme-purple hover:bg-theme-purple-dark text-white font-medium py-3 px-6 rounded-full transition-colors duration-300 inline-flex items-center"
            >
              <Info className="mr-2 h-5 w-5" />
              Share Your Story
            </a>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;

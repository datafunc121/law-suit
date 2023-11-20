"use client"

import Image from "next/image"
import "regenerator-runtime/runtime"

export default function CaseDetail() {
  const caseDetails =
    "This is some text.<br/>This text will appear on a new line with a non-breaking space before it. <a href='https://example.com'>Visit Example.com</a>"

  return (
    <div className="overflow-y-auto">
      <main className="min-h-screen mx-auto px-4 md:px-24 pt-20">
        <div className="w-full lg:w-4/5 mx-auto overflow-hidden p-8 bg-white rounded-xl">
          <div className="flex flex-col items-center gap-2 mb-6">
            <img
              src="https://www.canlii.org/en/ca/scc/doc/2023/2023scc28/image001.jpg"
              alt="Legal Case Image"
              width={100}
              height={100}
            />
            <h1 className="text-xs font-medium text-primary-800 uppercase">
              Supreme court of Canada
            </h1>
          </div>

          <div className="ms-auto flex flex-col items-end gap-1">
            <p className="text-xs text-gray-700">
              <b className="font-semibold ">Citation:</b> R. v. Greater Sudbury
              (City), 2023 SCC 28
            </p>
            <p className="text-xs text-gray-700">
              <b className="font-semibold">Appeal Heard:</b> October 12, 2022
            </p>
            <p className="text-xs text-gray-700">
              <b className="font-semibold">Judgment Rendered:</b> November 10,
              2023
            </p>
            <p className="text-xs text-gray-700">
              <b className="font-semibold">Docket:</b> 39754
            </p>
          </div>

          <div className="ms-auto flex flex-col items-center gap-2 my-6">
            <p className="text-xs text-gray-700 font-medium">
              <b className="font-semibold text-primary-800 block text-center">
                Judicial Panel
              </b>{" "}
              Wagner C.J. and Karakatsanis, Côté, Brown,* Rowe, Martin, Kasirer,
              Jamal and O’Bonsawin JJ.
            </p>
          </div>

          <div className="ms-auto flex flex-col items-start gap-1 my-6 tracking-normal">
            <p className="text-xs text-gray-700 font-medium">
              <b className="font-semibold text-primary-800 block">Appellants</b>{" "}
              Corporation of the City of Greater Sudbury
            </p>
            <p className="text-xs text-gray-700 font-medium">
              <b className="font-semibold text-primary-800 block">
                Respondents
              </b>{" "}
              Ministry of the Attorney General (Ministry of Labour, Immigration,
              Training and Skills Development)
            </p>
            <p className="text-xs text-gray-700 font-medium">
              <b className="font-semibold text-primary-800 block">
                Interveners:
              </b>{" "}
              Retail Council of Canada, Regional Municipality of York, Regional
              Municipality of Peel, Regional Municipality of Durham, Regional
              Municipality of Halton, Regional Municipality of Waterloo,
              Regional Municipality of Niagara and Workers’ Compensation Board
              of British Columbia
            </p>
          </div>

          <div>
            <h5 className="text-xs text-primary-800 font-semibold">
              Case Details:
            </h5>
            <p
              className="text-xs text-gray-800 font-normal tracking-wide"
              dangerouslySetInnerHTML={{ __html: caseDetails }}
            ></p>
            <p className="text-xs text-gray-800 font-normal tracking-wide">
              &nbsp; &nbsp; The Act seeks to maintain and promote a reasonable
              level of protection for the health and safety of workers in and
              about their workplace and it fulfils its public welfare purpose by
              allocating various occupational health and safety duties among
              various classes of workplace actors, including constructors,
              employers and owners. These duties are often concurrent and
              overlapping: several different actors may be responsible for the
              same protective functions and measures — this is known as the
              “belt and braces” approach to occupational health and safety.
              Under this approach, where multiple workplace entities fail to
              safeguard health and safety, they cannot point to others’ failures
              as an excuse for their own; each workplace participant must ensure
              that the workplace is safe. Section 66(1)(a) of the Act makes it
              an offence for a workplace actor to breach one of the Act’s
              obligations, including s. 25(1)(c), which is a strict liability
              offence: the Ministry only needs to prove the actus reus beyond a
              reasonable doubt to ground a conviction.
              <br /> &nbsp; &nbsp; The City of Sudbury contracted with
              Interpaving Limited to act as constructor to repair a downtown
              water main. During the repairs, an Interpaving employee struck and
              killed a pedestrian when driving a road grader, in reverse,
              through an intersection. The Ministry charged the City under s.
              25(1)(c) of Ontario’s Occupational Health and Safety Act (“Act”)
              for failing to ensure that certain safety requirements of the
              accompanying regulation, Construction Projects (“Regulation”), had
              been met. The City conceded it was the owner of the construction
              project and acknowledged that it sent its quality control
              inspectors to the project site to oversee Interpaving’s contract
              compliance, but denied that it was an employer, arguing that it
              lacked control over the repair work and had delegated control to
              Interpaving. The provincial court trial judge acquitted the City
              because Interpaving, not the City, had direct control over the
              workers and the intersection and thus the City was not an employer
              under s. 1(1) of the Act. Alternatively, the trial judge found
              that even if the City was an employer and breached its
              obligations, it acted with due diligence. The provincial offences
              appeal court upheld the trial judge’s decision but did not address
              the finding that the City acted with due diligence. The Court of
              Appeal set aside the decision of the provincial offences appeal
              court judge, found the City liable under s. 25(1)(c) as an
              employer, and remitted the question of the City’s due diligence to
              the provincial offences appeal court. Held on equal division
              (Karakatsanis, Côté, Rowe and O’Bonsawin JJ. dissenting): The
              appeal should be dismissed. Per Wagner C.J. and Martin, Kasirer
              and Jamal JJ.: There is agreement with the Court of Appeal that
              the City was an employer and breached its duty under s. 25(1)(c)
              of the Act, and that the issue of the City’s due diligence defence
              should be remitted to the provincial offences appeal court. While
              control over workers and the workplace may bear on a due diligence
              defence, nothing in the text, context or purpose of the Act
              requires the Ministry to establish control over the workers or
              workplace to prove that the City breached its obligations as an
              employer under s. 25(1)(c). The Act seeks to maintain and promote
              a reasonable level of protection for the health and safety of
              workers in and about their workplace and it fulfils its public
              welfare purpose by allocating various occupational health and
              safety duties among various classes of workplace actors, including
              constructors, employers and owners. These duties are often
              concurrent and overlapping: several different actors may be
              responsible for the same protective functions and measures — this
              is known as the “belt and braces” approach to occupational health
              and safety. Under this approach, where multiple workplace entities
              fail to safeguard health and safety, they cannot point to others’
              failures as an excuse for their own; each workplace participant
              must ensure that the workplace is safe. Section 66(1)(a) of the
              Act makes it an offence for a workplace actor to breach one of the
              Act’s obligations, including s. 25(1)(c), which is a strict
              liability offence: the Ministry only needs to prove the actus reus
              beyond a reasonable doubt to ground a conviction. Where an owner
              who contracts for the services of a constructor on a construction
              project is prosecuted for a breach of s. 25(1)(c), a court must
              first consider whether the Ministry has proven beyond a reasonable
              doubt that the Act applied to the accused because the accused was
              an employer under s. 1(1) of the Act. An owner is an employer if
              it employed workers at a workplace where an alleged breach of s.
              25(1)(c) occurred, or contracted for the services of a worker at
              that workplace (including for the services of a constructor). The
              Ministry is not required to prove that the owner had control over
              the workplace or the workers there. It is clear from the text of
              the definition of employer that control is not an element that the
              Ministry must prove to establish that an accused is subject to the
              duties of an employer. First, the definition contains no reference
              to control. A control requirement should therefore not be embedded
              into the definition of an employer when the legislature
              deliberately chose not to do so. Second, by referring to a
              contract for services in the definition of employer, the
              legislature signalled its intent to capture employer‑independent
              contractor relationships under the employer definition and to
              remove from the definition the traditional common law control
              condition that distinguishes employment and independent contractor
              relationships. A court must then determine whether the Ministry
              has proven beyond a reasonable doubt that the accused breached s.
              25(1)(c) of the Act. There is a breach of s. 25(1)(c) if the
              safety measures prescribed by the Regulation are not carried out
              in the workplace to which the owner/employer is connected by a
              contractual relationship with employees or an independent
              contractor. Again, the Ministry is not required to prove that the
              owner had control over the workplace or the workers there. A
              review of s. 25(1)(c)’s text, context, and purpose reveals that
              control on the part of the accused is not an element of this duty.
              The plain text of s. 25(1)(c) does not limit this duty to workers
              over which the employer has control. The duty in s. 25(1)(c) must
              also be understood in the context of the scheme of the Act, the
              wide definition of employer and the existence of a due diligence
              defence under s. 66(3)(b) of the Act. Section 25(1)(c) was
              intentionally drafted broadly so as to focus on the employer’s
              connection to the workplace rather than any particular worker. The
              breadth of the employer’s duties and the broad scope of the
              definition of “employer” are mutually reinforcing. While the
              interpretation of ss. 1(1) and 25(1)(c) raises separate questions,
              these sections should be read harmoniously as they are nonetheless
              related. Reading a control requirement into s. 25(1)(c) would
              narrow the employer’s duties and would introduce an internal
              inconsistency into the Act by pairing a broad definition of
              “employer” with a narrow interpretation of s. 25(1)(c), rather
              than finding harmony between these provisions and treating them as
              mutually reinforcing as the legislature intended. In addition, the
              existence of the due diligence defence in s. 66(3)(b) is relevant
              context because it means that employers who breach s. 25(1)(c)
              will not be subject to penalties under the Act if they can show
              they took all reasonable steps to avoid the breach. Section
              66(3)(b) functions as a safety valve, in which the presence of
              control may be a factor in assessing due diligence. Reading a
              control requirement into s. 25(1)(c) would also be inconsistent
              with the purpose of the Act. The act is a public welfare statute.
              Its purpose is to maintain and promote a reasonable level of
              protection for the health and safety of workers in and about their
              workplace. A control requirement could defeat the Act’s public
              welfare purpose of creating overlapping responsibility and would
              essentially give workplace actors a tool for frustrating
              regulatory prosecutions at the outset, by arguing that they had no
              control over a hazard because other parties had greater
              comparative control over that hazard. Finally, a court must
              determine whether the accused has proven on a balance of
              probabilities that it should avoid liability because it exercised
              due diligence under s. 66(3)(b) of the Act. Control should only be
              considered at this stage of the analysis. It is open to an accused
              to prove that its lack of control suggests that it took all
              reasonable steps in the circumstances. Shifting the burden to the
              employer to establish a due diligence defence incentivizes
              employers to take all steps within their control to achieve
              workplace safety and prevent future harm so that they may avail
              themselves of the defence should harm occur. That an employer’s
              degree of control over the parties in the workplace is relevant to
              its due diligence defence also answers fairness concerns about
              imposing liability on an employer for a breach caused by another
              party. Relevant considerations for the court’s determination at
              this stage may include, but are not limited to: the accused’s
              degree of control over the workplace or the workers; whether the
              accused delegated control to the constructor in an effort to
              overcome its own lack of skill, knowledge or expertise to complete
              the project in accordance with the Regulation; whether the accused
              took steps to evaluate the constructor’s ability to ensure
              compliance with the Regulation before deciding to contract for its
              services; and whether the accused effectively monitored and
              supervised the constructor’s work on the project to ensure that
              the prescriptions in the Regulation were carried out in the
              workplace. In the instant case, the City was an employer of the
              quality control inspectors, whom it employed directly and
              dispatched to the construction project. The City was also an
              employer of Interpaving, with whom it contracted to undertake the
              construction project. As an employer of the inspectors and of
              Interpaving, the City was required by s. 25(1)(c) of the Act to
              ensure that the measures and procedures prescribed were carried
              out in the workplace. On the date of the accident, measures
              required by the Regulation — a fence between the construction work
              and the public way as well as signallers — were not carried out in
              the workplace. Thus, the City, as employer, committed the offence
              under s. 25(1)(c). Per Karakatsanis, Rowe and O’Bonsawin JJ.
              (dissenting): The appeal should be allowed. The City is the
              employer of its quality control inspectors; therefore, the scope
              of its duties under s. 25(1)(c) of the Act must be examined.
              Properly interpreted, s. 25(1)(c) holds employers liable for
              breaching the regulatory measures which apply to them. Where
              certain measures in the Regulation do not specify to whom they
              apply, these measures apply to an employer when they relate to the
              work that the employer controlled and performed through their
              workers. As the courts below did not properly analyze whether the
              offence was made out, the matter should be remitted for
              reconsideration by the provincial court to consider the
              applicability of the regulatory measures. The definition of
              employer in s. 1(1) of the Act covers two broad relationships. The
              first branch of the definition is satisfied if the person employs
              one or more workers. It focuses on the employment contract and
              reflects the traditional conception of a direct employer‑employee
              relationship. However, the fact that a party is an employer does
              not mean that they are an employer to all workers at a workplace
              or project, which may affect the scope of their responsibilities.
              The text of the definition of “employer” is expressly focused on a
              party’s relationship to workers and it is inappropriate to narrow
              it by considering that party’s relationship to a workplace. The
              latter relationship only becomes relevant at the stage of
              determining an employer’s duties. Accordingly, the first branch of
              the definition is satisfied where a traditional employment
              relationship exists. The second branch of the definition involves
              a person who contracts for the services of one or more workers.
              The second branch prevents parties from removing themselves from
              the application of the Act where they subcontract out work, rather
              than directly hiring workers through an employment contract. It
              ensures that the substance of the employer‑worker relationship is
              not determined by the manner in which it is described in the
              contract. When an owner contracts with a constructor, they are not
              seeking to subcontract out particular tasks to any independent
              contractor instead of hiring workers directly through an
              employment contract; rather, they are asking an entity to assume
              plenary oversight and authority to undertake the entire project.
              This relationship reflects the practical reality of the
              construction industry, where owners promote safety by transferring
              responsibility to constructors with relevant expertise. The
              owner‑constructor relationship does not generally fall within the
              second branch of the employer definition in s. 1(1). The Act is
              specifically designed so that an owner can take a hands‑off
              approach to overseeing the project relative to the constructor. A
              constructor undertakes the project, which indicates that overall
              authority for the project, including the coordination of health
              and safety, falls to the constructor. Treating an owner as
              automatically being an employer of the workers hired or contracted
              for by the constructor under the second branch of the employer
              definition would undermine the design of the scheme. It would mean
              that by virtue of engaging a constructor to oversee a project,
              project owners would be assigned responsibilities that would
              require them to play an active role across the project — a role
              that the Act sought to avoid by enabling them to contract with a
              constructor in the first place. Treating the owner‑constructor
              relationship as an employer‑worker relationship detracts from the
              legislation’s effectiveness because it ignores the practical
              differences between these relationships and undercuts the distinct
              mechanisms by which they promote worker safety. In sum, the second
              branch of the employer definition is broad, but it does not turn
              an owner into the employer of workers hired or contracted for by a
              constructor. Proceeding on the assumption that once a party meets
              the definition of employer, they are strictly liable for the
              breach of any regulatory provision through the operation of s.
              25(1)(c) and must rely on the due diligence defence conflates the
              definition of employer with the determination of the scope of an
              employer’s duties. On a proper construction of the scheme, it is
              essential to examine both the definition of the workplace parties
              and the duties that actually apply to them. An offence cannot be
              founded on the breach of a duty that does not apply to the
              accused. Once a workplace party is found to satisfy the relevant
              definition set out in s. 1(1) of the Act, it is necessary to then
              consider which duties actually applied to the party at the time of
              the alleged offence. The Act separately sets out the duties for
              each workplace party. Section 25(1)(c) requires an employer to
              ensure compliance with all applicable regulatory measures. Where
              the Regulation expressly states to whom its measures apply, there
              will be no question as to whether they fall within the employer’s
              duty under s. 25(1)(c). Where however, a particular measure is
              silent concerning to whom it applies, the measure applies when it
              relates to work that the employer controlled and performed through
              their workers. This relationship is established when the employer
              has authority over the performance of a task, usually because it
              is the portion of the work within the larger project that, whether
              alone or with other parties, they have been entrusted with
              performing through the workers they have employed or contracted
              for. To be sure, multiple parties can be jointly entrusted with a
              task, since different employers will often collaborate, and thus
              multiple employers can have an overlapping responsibility to
              fulfill the same measures. A regulatory measure can apply to the
              work of multiple employers so long as it relates to each employer.
              The core question is: What work is an employer responsible for
              undertaking on the construction project? The Ministry should know
              whether the measure is actually related to the employer’s work
              before making the decision to charge that employer. Therefore, the
              regulatory measures apply when they present a nexus to the work
              which is under the employer’s control and performed through their
              workers. Establishing this nexus between the measure and the
              employer is a binary, threshold question: either the measure
              applies because it is related to work which the employer has
              undertaken, or the measure does not apply because such a link is
              absent. It would be absurd to interpret s. 25(1)(c) and the
              Regulation as obligating every employer at a construction project
              to ensure compliance with all measures contained within the
              Regulation. This would effectively mean that everyone who employs
              anyone is responsible for everything that anyone does. Protecting
              worker safety is of critical importance and it is far from clear
              that making every employer liable for the acts of all other
              employers in carrying out all regulatory obligations meaningfully
              improves worker safety. A measured and practical approach gives
              effect to the concept of overlapping responsibilities. Since the
              workers’ activities under each employer’s control frequently
              overlap on complex construction projects, so too will the measures
              which apply to them under s. 25(1)(c). A measured and practical
              approach also fully operationalizes the belt and braces approach
              which aims to create meaningful protection in practice. Yet, if
              there is no relationship between the measure and the employer’s
              work, the employer cannot serve as an effective brace. Imposing
              measures contained in the Regulation onto employers bearing no
              relationship to the work at hand adds an indefinite number of
              illusory braces: they provide a false sense of added safety but,
              in reality, only increase the legal jeopardy of unrelated
              workplace parties who could not have ensured compliance with those
              measures. Holding employers with no control liable does nothing to
              increase worker safety — it is this very lack of control which
              makes them unable to carry out the regulatory measures in the
              first place. Additionally, limitless responsibilities lead to
              confusion and a lack of coordination on a construction project. If
              every employer is liable for everything and has duties towards
              unrelated parties, an individual employer’s sphere of
              responsibility becomes unclear. Safety issues could arise if
              multiple employers with no relationship to the duty or expertise
              in the area seek to enforce their own version of a particular
              safety procedure on other workers. Alternatively, unlimited duties
              can lead to neglect if each employer assumes that duties owed by
              all employers will have been fulfilled by someone else.
              Prosecutorial discretion will not limit the potential for
              absurdity to occur. This effectively gives prosecutors unbounded
              discretion to define the proper scope of each employer’s duties by
              deciding who to charge, rendering the ultimate delineation of
              duties in the Act unpredictable and uneven from the accused’s
              perspective. Reliance on a promise that prosecutors would not
              charge employers for breaches of regulatory measures over which
              they had no control emphasizes this absurdity. The availability of
              the due diligence defence at s. 66(3) also initially presents
              itself as an appealing solution, but there are multiple flaws with
              adopting an approach that pushes most of the analysis concerning
              an employer’s responsibility to the due diligence stage. From a
              methodological perspective, the offence and the defence should not
              be conflated. Judges should not abdicate the responsibility of
              arriving at a reasonable interpretation of a duty merely because a
              defence exists or because doing so would improve administrative
              efficiency. A focus on the due diligence defence flips the
              structure of offences on its head: every employer is captured by
              the offence as soon as any regulatory measure is not met, and the
              accused must bear the burden of pulling themselves out of the
              ambit of the offence. Shifting much of the analysis on the
              contents of the duty and the nature of the employer’s work to the
              due diligence stage increases uncertainty in practice and ignores
              the reality of how the scheme operates on the ground. If most of
              the employer’s obligations are outside of their control, they have
              no ability to even know whether the measures are being complied
              with or what they could be charged with at any moment. In
              contrast, requiring that a measure relates to an employer’s work
              provides employers with a greater understanding of their
              responsibilities and encourages them to take initiative to protect
              workers. In the instant case, because the City had hired quality
              control inspectors through a contract of employment, it satisfied
              the definition of employer under the first branch. The City owes
              duties as the employer of these workers under the Act. However, by
              contracting with a constructor, it did not become the employer of
              the workers that the constructor retained. The owner‑constructor
              contract reflects a distinct relationship contemplated in the Act
              that does not generally fall within the second branch of the
              employer definition in s. 1(1). Consequently, the City is only the
              employer of its quality control inspectors. In light of the
              conclusion that the City is an employer to the quality control
              inspectors, the applicability of the regulatory measures depends
              on whether the City controlled work being performed near public
              ways or controlled the operation of vehicles, machines and
              equipment. The trial judge however did not consider the
              applicability of the regulatory measures, nor did the provincial
              offences appeal court or the Court of Appeal. Accordingly, the
              proper approach is to remit the matter to the provincial court to
              determine whether the relevant provisions of the Regulation
              related to the City and thereby fell within its duty under s.
              25(1)(c) of the Act. Per Côté J. (dissenting): The appeal should
              be allowed and the acquittals entered by the trial judge should be
              restored. Properly interpreted, the obligations prescribed by the
              Regulation were the responsibility of the constructor and/or the
              employers who performed the relevant construction work. The City
              had no involvement in or control over that work and was therefore
              not an employer at the construction project. There is agreement
              with Rowe and O’Bonsawin JJ. that the definition of employer in s.
              1(1) of the Act does not capture the construction‑specific
              relationship between a project owner and its general contractor. A
              project owner who hires a constructor is not the employer of the
              constructor itself or its workers. An employer cannot evade its
              occupational health and safety responsibilities by hiring an
              independent contractor instead of entering a typical employment
              relationship. But it does not follow that an employer is
              responsible for the employees and independent contractors of other
              employers. There is also substantial agreement with Rowe and
              O’Bonsawin JJ.’s interpretation of the duties of employers under
              s. 25(1)(c) of the Act, which must be read in context and together
              with the applicable Regulation. It would be absurd to interpret s.
              25(1)(c) literally to require each employer on a construction
              project to ensure compliance with all applicable regulations. On a
              construction project, while each employer is responsible for the
              health and safety of its own workers, the constructor is
              responsible for health and safety across the project. The belt and
              braces approach to occupational health and safety is not without
              reasonable limits and should not be interpreted in a manner that
              extends the reach of the Act beyond what was intended by the
              legislature. To impose duties on employers that they cannot
              possibly fulfil does not further the aim and purpose of the Act,
              which is to promote worker safety. The position that workplaces
              will be safer if every employer is made responsible for every
              possible safety obligation has superficial appeal, but it also
              creates a clear disincentive for a municipal project owner to
              engage in quality control efforts. A municipal project owner is
              not an employer on the construction site merely because it employs
              quality control inspectors. Holding every project owner strictly
              liable for all safety hazards it encountered in its quality
              control efforts — and which it did nothing to create — renders the
              quality control exception meaningless. It would no longer matter
              that owners do not become constructors by hiring quality control
              personnel. They would simply become employers who, in addition to
              constructors, have a strict duty to ensure compliance across the
              construction project. The due diligence defence only becomes
              relevant once the elements of the statutory offence have been
              established. An employer’s ability to make out a potentially
              costly and burdensome defence is irrelevant to the proper
              interpretation of who is an employer on a construction site and to
              the scope of its corresponding statutory duties. It does not
              prevent future harm to impose statutory liability on employers who
              have no connection to, or control over, the safety obligation in
              question. Where an employer on a construction site did have some
              measure of control over the safety obligation in question, the
              burden shifts to the employer to demonstrate that it took every
              precaution reasonable in the circumstances. In a careful and
              thorough analysis, the trial judge in the instant case repeatedly
              rejected the Ministry’s position that the City or its inspectors
              exercised control over any construction work at the project. The
              trial judge properly found that the Ministry had not proved that
              the City acted as an employer on the construction site.
              Interpaving was both the constructor of the project and the
              employer of the road grader operator who fatally struck and killed
              a pedestrian. The City’s involvement in the project was limited to
              quality control and it was not responsible for the completion of
              any construction work. The trial judge’s conclusions on the City’s
              lack of control at the project are findings of fact that deserve
              deference. The trial judge also correctly found that even if she
              was wrong in concluding that the City was not an employer on the
              construction site, the City took every precaution reasonable in
              the circumstances to ensure safety at the project. It would be an
              extravagant proposition to say that a municipal project owner
              becomes an employer of every person on a project by attending the
              project for the limited purpose of quality assurance. To impose
              statutory liability on the City in these circumstances would be a
              regrettable departure from the established scheme of the Act. The
              City was not statutorily obligated to ensure compliance with the
              Regulation which applied only to the workplace parties involved in
              the actual construction work at the project site. Cases Cited By
              Martin J. Applied: R. v. Wyssen (1992), 1992 CanLII 7598 (ON CA),
              10 O.R. (3d) 193; considered: West Fraser Mills Ltd. v. British
              Columbia (Workers’ Compensation Appeal Tribunal), 2018 SCC 22,
              [2018] 1 S.C.R. 635; referred to: Ontario (Ministry of Labour) v.
              Hamilton (City) (2002), 2002 CanLII 16893 (ON CA), 58 O.R. (3d)
              37; Ontario (Minister of Labour) v. Enbridge Gas Distribution
              Inc., 2010 ONSC 2013, 261 O.A.C. 27; R. v. J. Stoller Construction
              Ltd., 1986 CarswellOnt 3654 (WL); R. v. Stelco Inc. (1989), 1
              C.O.H.S.C. 76; R. v. Structform International Ltd., [1992] O.J.
              No. 1711 (QL), 1992 CarswellOnt 2751 (WL); R. v. Thomas G. Fuller
              & Sons Ltd., 2008 CarswellOnt 9276 (WL); R. v. Cox Construction
              Ltd., 2008 CarswellOnt 9540 (WL); R. v. Saskatchewan Power Corp.,
              2016 SKPC 2; Ontario (Ministry of Labour) v. Dofasco Inc., 2007
              ONCA 769, 87 O.R. (3d) 161; R. v. Campbell, [2004] O.J. No. 129
              (QL), 2004 CarswellOnt 116 (WL); R. v. Timminco Ltd. (2001), 2001
              CanLII 3494 (ON CA), 54 O.R. (3d) 21; Ontario v. London Excavators
              & Trucking Ltd. (1998), 1998 CanLII 3479 (ON CA), 40 O.R. (3d) 32;
              Ontario (Ministry of Labour) v. Pioneer Construction Inc. (2006),
              2006 CanLII 15621 (ON CA), 79 O.R. (3d) 641; Ontario (Ministry of
              Labour) v. United Independent Operators Ltd., 2011 ONCA 33, 104
              O.R. (3d) 1; R. v. McIntosh, 1995 CanLII 124 (SCC), [1995] 1
              S.C.R. 686; R. v. Hinchey, 1996 CanLII 157 (SCC), [1996] 3 S.C.R.
              1128; 671122 Ontario Ltd. v. Sagaz Industries Canada Inc., 2001
              SCC 59, [2001] 2 S.C.R. 983; Ontario (Ministry of Labour) v. Reid
              & DeLeye Contractors Ltd., 2011 ONCJ 472; Ontario (Ministry of
              Labour) v. Nor Eng Construction & Engineering Inc., 2008 ONCJ 296;
              R. v. Marina Harbour Systems, 2008 CanLII 64002; R. v. EFCO Canada
              Co., 2010 ONCJ 421; Canada Post Corp. v. Canadian Union of Postal
              Workers, 2019 SCC 67, [2019] 4 S.C.R. 900; R. v. Sault Ste. Marie,
              1978 CanLII 11 (SCC), [1978] 2 S.C.R. 1299; Director of
              Occupational Health and Safety v. Government of Yukon, William R.
              Cratty and P.S. Sidhu Trucking Ltd., 2012 YKSC 47; R. v. Dan
              Gamache Trucking Inc., 2005 BCSC 1487, 23 M.V.R. (5th) 305; R. v.
              Bradsil 1967 Ltd., [1994] O.J. No. 837 (QL), 1994 CarswellOnt 4450
              (WL); R. v. Cancoil Thermal Corp. and Parkinson (1986), 1986
              CanLII 154 (ON CA), 27 C.C.C. (3d) 295; R. v. Wholesale Travel
              Group Inc., 1991 CanLII 39 (SCC), [1991] 3 S.C.R. 154; Wilson v.
              British Columbia (Superintendent of Motor Vehicles), 2015 SCC 47,
              [2015] 3 S.C.R. 300; La Souveraine, Compagnie d’assurance générale
              v. Autorité des marchés financiers, 2013 SCC 63, [2013] 3 S.C.R.
              756; R. v. Grant Forest Products Inc. (2002), 98 C.R.R. (2d) 149,
              rev’d 2003 CarswellOnt 6071 (WL); Blue Mountain Resorts Ltd. v.
              Ontario (Ministry of Labour), 2013 ONCA 75, 114 O.R. (3d) 321; R.
              v. Gonder (1981), 1981 CanLII 3207 (YK TC), 62 C.C.C. (2d) 326; R.
              v. Inco Ltd., [2001] O.J. No. 4938 (QL), 2001 CarswellOnt 10933
              (WL); Ontario (Ministry of Labour) v. Linamar Holdings Inc., 2012
              ONCJ 295; Ontario (Ministry of Labour) v. Wal-Mart Canada Corp.,
              2016 ONCJ 267, 32 C.C.E.L. (4th) 313; R. v. Imperial Electric
              Ltd., 1998 CarswellBC 4085 (WL); R. v. Amherst Fabricators Ltd.,
              [2003] N.S.J. No. 280 (QL); R. v. XI Technologies Inc., 2011 ABPC
              313; R. v. Rio Algom Ltd. (1988), 1988 CanLII 4702 (ON CA), 66
              O.R. (2d) 674; R. v. Brampton Brick Ltd. (2004), 2004 CanLII 2900
              (ON CA), 189 O.A.C. 44.
            </p>
          </div>

          {/* <!-- Citations --> */}
          {/* <div className="mb-4">
              <h2 className="text-2xl font-bold mb-2">Citations</h2>
              <ul>
                <li>
                  <span className="text-gray-600">Case Citation 1</span>
                </li>
                <li>
                  <span className="text-gray-600">Case Citation 2</span>
                </li>
              </ul>
            </div> */}
          {/* </div> */}
        </div>
      </main>
    </div>
  )
}
